import { Meteor } from 'meteor/meteor';
import { loadParties } from './imports/fixture/parties';
import './imports/publications/parties';
Meteor.startup(() => {
    loadParties();
});