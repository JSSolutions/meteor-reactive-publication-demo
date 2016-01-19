let counter = 0;
Meteor.setInterval(() => {
  FakeFS.push({
    _id: Random.id(),
    name: ['file_', ++counter, '.txt'].join(''),
    isDirectory: false,
    size: 256
  });
}, 1000);
