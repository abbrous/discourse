module("Acceptance: wizard");

test("Wizard starts", assert => {
  visit("/");
  andThen(() => {
    assert.ok(exists('.wizard-column-contents'));
    assert.equal(currentPath(), 'step');
  });
});

test("Forum Name Step", assert => {
  visit("/step/forum-title");
  andThen(() => {
    assert.ok(exists('.wizard-step'));
    assert.ok(exists('.wizard-step-forum-title'), 'it adds a class for the step id');

    assert.ok(exists('.wizard-step-title'));
    assert.ok(exists('.wizard-step-description'));
  });

  fillIn('input.field-forum-title', "Evil Trout's Forum");
  click('.wizard-next');

  andThen(() => {
    assert.ok(exists('input.field-contact-email'));
  });
});
