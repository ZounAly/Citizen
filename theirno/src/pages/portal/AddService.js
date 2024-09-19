import React, { useEffect, useState } from "react";
import Sidebar from '../../components/Sidebar';
import Placeholder from '../../images/placeholder.png';

function AddService() {
    const [service, setService] = useState({});
    const [features, setFeatures] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [serviceImage, setServiceImage] = useState(Placeholder);
    const [secondaryImage, setSecondaryImage] = useState(Placeholder);
    const [serviceImageUrl, setServiceImageUrl] = useState('');
    const [secondaryImageUrl, setSecondaryImageUrl] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const id = query.get('id');
    
        if (id) {
            setIsEdit(true);
            fetch(`http://localhost:5000/api/services/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log("response data: ", data);
                    setService(data);
    
                    const featuresData = data.features ? data.features.map(f => f.feature) : [];
                    setFeatures(featuresData);
    
                    setFaqs(data.faqs || []);

                    if (data.serviceImages && data.serviceImages.length > 0) {
                        setServiceImage(data.serviceImages[0].url);
                        setServiceImageUrl(data.serviceImages[0].url);  // Set the URL for service image
                        if (data.serviceImages[1]) {
                            setSecondaryImage(data.serviceImages[1].url);
                            setSecondaryImageUrl(data.serviceImages[1].url);  // Set the URL for secondary image
                        }
                    }
                })
                .catch(error => console.error('Error fetching service:', error));
        } else {
            setFeatures([""]);
            setFaqs([{ question: "", answer: "" }]);
        }
    }, []);       

    const handleImageUpload = (file, setImageUrl, setImage) => {
        const formData = new FormData();
        formData.append('image', file);

        fetch('http://localhost:5000/api/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.imageUrl;
            setImageUrl(imageUrl);
            setImage(`http://localhost:5000${imageUrl}`);
        })
        .catch(error => console.error('Error uploading image:', error));
    };

    const handleServiceImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleImageUpload(file, setServiceImageUrl, setServiceImage);
        }
    };

    const handleSecondaryImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleImageUpload(file, setSecondaryImageUrl, setSecondaryImage);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title: e.target.title.value,
            description: e.target.description.value,
            features: features,
            faqs: faqs.map(faq => ({ question: faq.question, answer: faq.answer })),
            serviceCharges: e.target.serviceCharges.value,
            mileCharges: e.target.mileCharges.value,
            misCharges: e.target.misCharges.value,
            serviceImages: [
                serviceImageUrl || Placeholder,
                secondaryImageUrl || Placeholder
            ]
        };
        console.log("formData: ", formData);

        const url = isEdit ? `http://localhost:5000/api/services/${service._id}` : 'http://localhost:5000/api/services';
        const method = isEdit ? 'PUT' : 'POST';

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            window.location.href = '/all-services';  
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    const handleFeatureChange = (index, value) => {
        const newFeatures = [...features];
        newFeatures[index] = value;
        setFeatures(newFeatures);
    };

    const handleFaqChange = (index, field, value) => {
        const newFaqs = [...faqs];
        newFaqs[index] = { ...newFaqs[index], [field]: value };
        setFaqs(newFaqs);
    };

    const addFeature = () => {
        setFeatures([...features, ""]);
    };

    const removeFeature = (index) => {
        setFeatures(features.filter((_, i) => i !== index));
    };

    const addFaq = () => {
        setFaqs([...faqs, { question: "", answer: "" }]);
    };

    const removeFaq = (index) => {
        setFaqs(faqs.filter((_, i) => i !== index));
    };

    return (
        <>  
            <div className="d-flex h-100vh">
                <Sidebar />
                <div className="main-content col-md-9">
                    <div className="m-header d-flex justify-content-between">
                        <h4>{isEdit ? 'Edit Service' : 'Add New Service'}</h4>
                    </div>
                    <div className="service-container">
                        <form onSubmit={handleSubmit}>
                            <div className="row" id="add-service">
                                <div className="col-md-9">
                                    <div className="form-group">
                                        <label htmlFor="serviceName">Service Name</label>
                                        <input type="text" className="form-control" id="serviceName" name="title" placeholder="Service Name" defaultValue={service.title || ''} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="serviceDesc">Service Description</label>
                                        <textarea className="form-control" id="serviceDesc" name="description" placeholder="Service Description" defaultValue={service.description || ''}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="features">Features</label>
                                        <div id="repeaterContainer">
                                            {features.map((feature, index) => (
                                                <div className="repeater-item" key={index}>
                                                    <input
                                                        type="text"
                                                        name={`featureItem[${index}]`}
                                                        value={feature}
                                                        placeholder="Add a feature"
                                                        className="form-control"
                                                        onChange={(e) => handleFeatureChange(index, e.target.value)}
                                                    />
                                                    <button type="button" className="remove-item" onClick={() => removeFeature(index)}>
                                                        <i className="fa fa-times" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        <button type="button" onClick={addFeature} className="btn btn-secondary">Add</button>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="faq">Frequently Asked Questions</label>
                                        <div id="repeaterContainer2">
                                            {faqs.map((faq, index) => (
                                                <div className="repeater-item" key={index}>
                                                    <input
                                                        type="text"
                                                        name={`questionItem[${index}]`}
                                                        value={faq.question}
                                                        placeholder="Add a Question"
                                                        className="form-control"
                                                        onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                                                    />
                                                    <input
                                                        type="text"
                                                        name={`answerItem[${index}]`}
                                                        value={faq.answer}
                                                        placeholder="Answer here"
                                                        className="form-control"
                                                        onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                                                    />
                                                    <button type="button" className="remove-item" onClick={() => removeFaq(index)}>
                                                        <i className="fa fa-times" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        <button type="button" onClick={addFaq} className="btn btn-secondary">Add</button>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <button type="submit" className="btn btn-primary">{isEdit ? 'Update Service' : 'Publish'}</button>
                                    <div className="form-group">
                                        <label htmlFor="serviceImage" className="form-label">Service Image</label>
                                        <img src={serviceImage} className="img-fluid" alt="Service" />
                                        <input className="form-control" type="file" id="serviceImage" name="serviceImage" accept="image/jpeg, image/png, image/gif" onChange={handleServiceImageChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="serviceCharges">Service Charges ($)</label>
                                        <input type="number" className="form-control" id="serviceCharges" name="serviceCharges" placeholder="Service Charges" min="1" defaultValue={service.serviceCharges || ''} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mileCharges">Charges per Mile ($)</label>
                                        <input type="number" className="form-control" id="mileCharges" name="mileCharges" placeholder="Charges per Mile" min="0" defaultValue={service.mileCharges || ''} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="misCharges">Miscellaneous Charges ($)</label>
                                        <input type="number" className="form-control" id="misCharges" name="misCharges" placeholder="Miscellaneous Charges" min="0" defaultValue={service.misCharges || ''} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="secondaryImage" className="form-label">Secondary Image</label>
                                        <img src={secondaryImage} className="img-fluid" alt="Secondary" />
                                        <input className="form-control" type="file" id="secondaryImage" name="secondaryImage" accept="image/jpeg, image/png, image/gif" onChange={handleSecondaryImageChange} />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddService;
