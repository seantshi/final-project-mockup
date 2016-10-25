import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};

FlowRouter.route('/add-time', {
  name: 'Add_Time_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Time_Page' });
  },
});

FlowRouter.route('/edit-time', {
  name: 'Edit_Time_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Time_Page' });
  },
});

FlowRouter.route('/view-time', {
  name: 'View_Time_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'View_Time_Page' });
  },
});