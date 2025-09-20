import React, { useState } from 'react';

function DownloadableResources() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    segment: '',
    resource: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const resources = [
    {
      id: 'customer-success-checklist',
      title: 'Customer Success Optimization Checklist',
      description: 'A comprehensive 25-point checklist to audit and improve your customer success operations.',
      category: 'Customer Success'
    },
    {
      id: 'ecommerce-scaling-guide',
      title: 'E-commerce Scaling Playbook',
      description: 'Step-by-step guide to scale your e-commerce operations from 100 to 1000+ daily orders.',
      category: 'E-commerce'
    },
    {
      id: 'property-management-kpis',
      title: 'Property Management KPI Dashboard Template',
      description: 'Excel template with key performance indicators and metrics tracking for property portfolios.',
      category: 'Property Management'
    }
  ];

  const segments = [
    'Customer Success',
    'E-commerce Operations', 
    'Property Management',
    'General Operations',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.segment) {
      newErrors.segment = 'Please select your area of interest';
    }
    
    if (!formData.resource) {
      newErrors.resource = 'Please select a resource to download';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Log to console as mentioned in PR description
      console.log('Resource form submission:', formData);
      
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        segment: '',
        resource: ''
      });
    }
  };

  return (
    <section className="downloadable-resources section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="sec-head text-center mb-80">
              <span className="sub-title main-color mb-5">Free Resources</span>
              <h3 className="fw-600 fz-50 mb-20">
                Download <span className="fw-200">Operations Guides</span>
              </h3>
              <p className="fz-18">
                Get instant access to proven templates, checklists, and playbooks used in successful optimization projects.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="resources-list">
              {resources.map((resource, index) => (
                <div key={resource.id} className="resource-item mb-30 p-30 main-bg radius-15">
                  <div className="d-flex align-items-start">
                    <div className="resource-icon mr-20">
                      <i className="fas fa-download fz-24 main-color"></i>
                    </div>
                    <div className="resource-content flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-15">
                        <div>
                          <span className="badge badge-outline mb-10">{resource.category}</span>
                          <h5 className="fw-600 mb-10">{resource.title}</h5>
                        </div>
                        <label className="resource-select">
                          <input
                            type="radio"
                            name="resource"
                            value={resource.id}
                            checked={formData.resource === resource.id}
                            onChange={handleInputChange}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <p className="opacity-8 mb-0">{resource.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="resource-form p-30 sub-bg radius-15 sticky-top">
              <h5 className="fw-600 mb-30">Get Instant Access</h5>
              
              {showSuccess && (
                <div className="alert alert-success mb-20">
                  <i className="fas fa-check-circle mr-10"></i>
                  Thank you! Your download link has been sent to your email.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-20">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="form-group mb-20">
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="form-group mb-20">
                  <select
                    name="segment" 
                    value={formData.segment}
                    onChange={handleInputChange}
                    className={`form-control ${errors.segment ? 'is-invalid' : ''}`}
                  >
                    <option value="">Select Your Area of Interest *</option>
                    {segments.map(segment => (
                      <option key={segment} value={segment}>{segment}</option>
                    ))}
                  </select>
                  {errors.segment && <div className="invalid-feedback">{errors.segment}</div>}
                </div>

                {errors.resource && (
                  <div className="text-danger mb-20 fz-14">
                    <i className="fas fa-exclamation-circle mr-5"></i>
                    {errors.resource}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="butn butn-md butn-bg main-colorbg radius-30 w-100"
                  disabled={showSuccess}
                >
                  <span>Download Selected Resource</span>
                </button>

                <p className="fz-12 opacity-7 mt-15 text-center">
                  No spam. Unsubscribe anytime. Resources are delivered instantly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadableResources;