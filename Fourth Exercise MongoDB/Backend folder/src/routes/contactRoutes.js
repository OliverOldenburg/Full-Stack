const express = require('express');
const Contact = require('../models/contactModel');
const bodyParser = require('body-parser');

const contactRouter = express();
contactRouter.use(bodyParser.urlencoded({ extended: false }));

// Get all contacts
contactRouter.get("/contact/all", async (req, res) => {
    try {
        await Contact.find().then((contacts) => {
            if (contacts.length <= 0) {
                res.status(200).json({
                    success: false,
                    message: "No contacts to display.",
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: "Contacts found.",
                    contacts: contacts,
                });
            }
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

// Create a contact
contactRouter.post("/contact/create", async (req, res) => {
    const { first, last, avatar, notes, twitter, createdAt } = req.body;

    const contact = new Contact({
        first: first,
        last: last,
        avatar: avatar,
        notes: notes,
        twitter: twitter,
        createdAt: createdAt,
    });

    try {
        await contact.save().then((contact) => {
            return res.status(200).json({
                success: true,
                message: "Contact saved successfully!",
                contact: contact,
            });
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

// Get a contact by ID
contactRouter.get("/contact/find/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.find({ _id: id }).then((contact) => {
            if (contact.length <= 0) {
                return res.status(200).json({
                    success: false,
                    message: "Contact not found.",
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: "Contact found successfully.",
                    contact: contact,
                });
            }
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

// Update a contact
contactRouter.patch("/contact/edit/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await Contact.findOne({ _id: id }).then(async (contact) => {
            if (contact) {
                await Contact.findByIdAndUpdate(
                    id,
                    { $set: req.body },
                    { new: true }
                ).then((updatedContact) => {
                    res.status(200).json({
                        success: true,
                        message: "Contact updated successfully.",
                        new_contact: updatedContact,
                        pre_contact: contact,
                    });
                });
            } else {
                res.status(200).json({
                    success: false,
                    message: "Contact wasn't found",
                });
            }
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

// Delete a contact
contactRouter.delete("/contact/delete/:id", (req, res) => {
    const contactId = req.params.id;
    try {
        Contact.findByIdAndDelete(contactId).then((deletedContact) => {
            if (deletedContact) {
                return res.status(200).json({
                    success: true,
                    message: `Contact deleted`,
                    contact: deletedContact,
                });
            } else {
                return res.status(200).json({
                    success: false,
                    message: "Contact wasn't found",
                });
            }
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

// Export contactRouter as a module
module.exports = contactRouter;
