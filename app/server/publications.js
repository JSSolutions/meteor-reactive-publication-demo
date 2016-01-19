Meteor.publish(null, function () {
  const tracker = Tracker.autorun((computation) => {
    _.each(FakeFS.list(), (node) => {
      this.added('fs', node._id, node);
    });
    // call ready once the initial record set is complete
    computation.firstRun && this.ready();
  });
  this.onStop(() => tracker.stop());
});
