// Utilities
const { throwError, passError, handleValidationErrors } = require('@util/errors');
const { checkUpdatesValid, applyUpdates } = require('@util/updates');

// App

// Get all my messages
exports.getMyAccounts = async (req, res, next) => {
   res.status(200).json({ accounts: [] });
};

// Get single message
exports.getSingle = async (req, res, next) => {};