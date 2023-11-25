const ContactUs = require("../models/contactUs.js");

const resolvers = {
    Query: {
        async getContactUs(parent, args, contextValue, info) {
            const contactUs = await ContactUs.findById(args.id);
            contactUs.id = contactUs._id;

            return contactUs;
        },
    },
    Mutation: {
        async addContactUs(parent, args, contextValue, info) {
            const contactUs = new ContactUs({
                name: args.name,
                email: args.email,
                message: args.message,
            });

            const contUs = await contactUs.save();
            contUs.id = contUs._id;
            return contUs;
        },
    },
};

module.exports = resolvers;
