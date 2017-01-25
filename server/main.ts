import { Meteor } from 'meteor/meteor';
import { loadParties } from './imports/fixture/parties';

Meteor.startup(() => {
    loadParties();
});