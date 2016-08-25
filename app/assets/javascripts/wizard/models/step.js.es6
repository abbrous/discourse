import computed from 'ember-addons/ember-computed-decorators';

export default Ember.Object.extend({
  id: null,

  @computed('id')
  i18nKey: id => `wizard.step.${Ember.String.underscore(id)}`,

  @computed('i18nKey')
  title: i18nKey => I18n.t(`${i18nKey}.title`),

  @computed('i18nKey')
  description: i18nKey => I18n.t(`${i18nKey}.description`, { defaultValue: '' })

});
