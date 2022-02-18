'use strict';

module.exports = (Tracker) => {
  Tracker.track = (id, cb) => {
    var app = Tracker.app;

    Tracker.findById(id, (err, object) => {
      if (err) {
        let error = new Error('Error getting tracker');
        error.status = 401;
        // TODO ADD TO LOGGER
        cb(error);
      } else if (object == null) {
        let error = new Error('No tracker found');
        error.status = 400;
        cb(error);
      } else {
        app.models.Tracking.create({
          tracker: object.id,
          stamp: Date.now(),
        }, (trackingError, tracking) => {
          if (trackingError) {
            let error = new Error('Error setting new tracking');
            error.status = 402;
            // TODO ADD TO LOGGER
            cb(error);
          } else if (tracking == null) {
            let error = new Error('No tracking found');
            error.status = 403;
            // TODO ADD TO LOGGER
            cb(error);
          } else {
            object.count += 1;
            object.save((saveErr, afterSaveObj) => {
              cb(saveErr, afterSaveObj.count);
            });
          }
        });
      }
    });
  };

  Tracker.remoteMethod('track', {
    accepts: {
      arg: 'id',
      type: 'string',
      required: true,
    },
    description: 'Method that add a tracking to a tracker',
    http: {
      verb: 'post',
      path: '/track',
    },
    returns: {arg: 'count', type: 'string'},
  });
};
