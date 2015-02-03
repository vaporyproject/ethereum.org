//TODO: modularise if this ever grows

AppController = RouteController.extend({
  layoutTemplate: "appLayout",
  action: function(){
    throw new Error("action: override me!");
  }
});

HomeController = AppController.extend({
  data: function(){
    return {
      featuredMeetups: Meetups.find({featured: true}),
      meetups: Meetups.find()
    };
  },
  action: function(){
    this.render("homePage");
  }
});

TechnologyController = AppController.extend({
  action: function(){
    this.render("technologyPage");
  }
});

PhilosophyController = AppController.extend({
  action: function(){
    this.render("philosophyPage");
  }
});

AdminSignInController = AppController.extend({
  subsciptions: function(){
    return Meteor.subscribe("users");
  },
  action: function(){
    this.render("adminSignInPage");
  }
});

NewsController = AppController.extend({
  subscriptions: function(){
    Meteor.subscribe("feed_entries");
  },
  data: function(){
    return {
      blogFeed: FeedEntries.find({feed_category: "Blog"}, {limit: 3, sort: {pubdate: -1}}),
      tweets: FeedEntries.find({feed_category: "Twitter"}, {limit: 5, sort: {pubdate: -1}})
    };
  },
  action: function(){
    this.render("newsPage");
  }
});

TeamController = AppController.extend({
  action: function(){
    this.render("teamPage");
  }
});

