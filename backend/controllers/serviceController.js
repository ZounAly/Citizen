const asyncHandler = require('express-async-handler');
const Service = require('../models/service.js');
const Faqs = require('../models/faqs.js');
const ServiceImages = require('../models/serviceImages.js');
const Feature = require('../models/feature.js');
const path = require('path');

// @desc    Create a new service with FAQs and Images
// @route   POST /api/services
// @access  Public
const createService = asyncHandler(async (req, res) => {
  const { 
    title, 
    description, 
    serviceCharges, 
    mileCharges, 
    misCharges, 
    features, 
    faqs, 
    serviceImages 
  } = req.body;

  // Create the service
  const service = await Service.create({
    title,
    description,
    serviceCharges,
    mileCharges,
    misCharges,
    softDelete: false,
    createdOn: new Date(),
  });

  // Handle service images
  if (Array.isArray(serviceImages)) {
    const serviceImagesData = serviceImages.map((url) => ({
      serviceId: service._id,
      url,
    }));
    await ServiceImages.insertMany(serviceImagesData); // Insert all images at once
  }

  // Handle features
  if (Array.isArray(features)) {
    const featuresData = features.map((feature) => ({
      serviceId: service._id,
      feature,
      createdOn: new Date(),
    }));
    await Feature.insertMany(featuresData);
  }

  // Handle FAQs
  if (Array.isArray(faqs) && faqs.length > 0) {
    const faqsData = faqs.map(({ question, answer }) => ({
      serviceId: service._id,
      question,
      answer,
      createdOn: new Date(),
    }));
    await Faqs.insertMany(faqsData);
  }

  res.status(201).json(service);
});


// @desc    Get all services (excluding soft-deleted ones)
// @route   GET /api/services
// @access  Public
const getServices = asyncHandler(async (req, res) => {
  const services = await Service.find({ softDelete: false });

  // For each service, get associated FAQs and Images
  const servicesWithDetails = await Promise.all(
    services.map(async (service) => {
      const faqs = await Faqs.find({ serviceId: service._id });
      const serviceImages = await ServiceImages.find({ serviceId: service._id });
      return { ...service.toObject(), faqs, serviceImages };
    })
  );

  res.json(servicesWithDetails);
});

// @desc    Get service by ID (excluding soft-deleted ones)
// @route   GET /api/services/:id
// @access  Public
const getServiceById = asyncHandler(async (req, res) => {
  const service = await Service.findOne({ _id: req.params.id, softDelete: false });

  if (service) {
    // Fetch FAQs, Features, and Images for the service
    const faqs = await Faqs.find({ serviceId: service._id });
    const features = await Feature.find({ serviceId: service._id });  // Corrected reference
    const serviceImages = await ServiceImages.find({ serviceId: service._id });

    // Return the service along with FAQs, Features, and Images
    res.json({ 
      ...service.toObject(), 
      faqs, 
      features, 
      serviceImages 
    });
  } else {
    res.status(404);
    throw new Error('Service not found or soft-deleted');
  }
});

const getServiceByTitle = asyncHandler(async (req, res) => {
  // Transform title to match your database format if needed (e.g., converting spaces to dashes)
  const transformedTitle = req.params.title.replace(/-/g, ' ');
  // Fetch the service by title
  const service = await Service.findOne({ title: transformedTitle, softDelete: false });

  if (service) {
    // Fetch FAQs, Features, and Images for the service
    const faqs = await Faqs.find({ serviceId: service._id });
    const features = await Feature.find({ serviceId: service._id });  // Corrected reference
    const serviceImages = await ServiceImages.find({ serviceId: service._id });

    // Return the service along with FAQs, Features, and Images
    res.json({ 
      ...service.toObject(), 
      faqs, 
      features, 
      serviceImages 
    });
  } else {
    res.status(404);
    throw new Error('Service not found or soft-deleted');
  }
});


const updateService = asyncHandler(async (req, res) => {
  const { 
    title, 
    description, 
    serviceCharges, 
    mileCharges, 
    misCharges, 
    features, 
    faqs, 
    serviceImages 
  } = req.body;

  // Find the service by its ID
  const service = await Service.findById(req.params.id);

  if (service && !service.softDelete) {
    // Update the service title, description, and charges
    service.title = title || service.title;
    service.description = description || service.description;
    service.serviceCharges = serviceCharges || service.serviceCharges;
    service.mileCharges = mileCharges || service.mileCharges;
    service.misCharges = misCharges || service.misCharges;

    // Save the updated service details
    const updatedService = await service.save();

    // Delete existing service images and insert new ones
    if (Array.isArray(serviceImages)) {
      // Delete existing service images
      await ServiceImages.deleteMany({ serviceId: updatedService._id });

      // Insert new service images
      const imagesData = serviceImages.map((url) => ({
        serviceId: updatedService._id,
        url,
      }));
      await ServiceImages.insertMany(imagesData);
    }

    // Delete existing features and insert new ones
    if (Array.isArray(features)) {
      // Delete existing features
      await Feature.deleteMany({ serviceId: updatedService._id });

      // Insert new features
      const featuresData = features.map((feature) => ({
        serviceId: updatedService._id,
        feature,
        createdOn: new Date(),
      }));
      await Feature.insertMany(featuresData);
    }

    // Delete existing FAQs and insert new ones
    if (Array.isArray(faqs) && faqs.length > 0) {
      // Delete existing FAQs
      await Faqs.deleteMany({ serviceId: updatedService._id });

      // Insert new FAQs
      const faqsData = faqs.map(({ question, answer }) => ({
        serviceId: updatedService._id,
        question,
        answer,
        createdOn: new Date(),
      }));
      await Faqs.insertMany(faqsData);
    }

    // Return the updated service along with features, FAQs, and images
    res.json({
      ...updatedService.toObject(),
      serviceImages,
      features,
      faqs,
    });
  } else {
    res.status(404);
    throw new Error('Service not found or soft-deleted');
  }
});


// @desc    Soft-delete a service
// @route   DELETE /api/services/:id
// @access  Public
const deleteService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);

  if (service) {
    service.softDelete = true;
    await service.save();
    res.json({ message: 'Service soft-deleted' });
  } else {
    res.status(404);
    throw new Error('Service not found');
  }
});

module.exports = { createService, getServices, getServiceById, updateService, deleteService, getServiceByTitle };
