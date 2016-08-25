import Step from 'wizard/models/step';
import WizardField from 'wizard/models/wizard-field';

const json = [
  {
    id: 'forum-title',
    fields: [
      { id: 'forum_title', type: 'text' }
    ],
    next: 'contact'
  },
  {
    id: 'contact',
    fields: [
      { id: 'contact_email', type: 'text' }
    ]
  }
];

const STEPS = json.map(step => {
  const stepObj = Step.create(step);
  stepObj.fields = stepObj.fields.map(f => {
    f.step = stepObj;
    return WizardField.create(f);
  });
  return stepObj;
});

export function findStep(id) {
  return STEPS.findProperty('id', id);
}
