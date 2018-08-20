import React from "react";

import Dropdown from "../../components/dropdown";

class PageHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checklist: [
        { 
          title: "1. Code splitting via the routes",
          content: "For projects using React Router, it’s possible to split your React code which will result in much smaller bundles being delivered on page load. This may not seem like a necessary step early on in the creation process, but dividing your code bundles like this may mean a much faster homepage in the long run when your website starts to bloat. This can be achieved via Webpack configuration as seen here, however for those using Create React App and not wanting to eject (or for those who simply want a clearer process) there’s a great library called React Loadable that will allow you to do this from within your Javascript, configuring your webpack file from behind the scenes.",
          open: false
        },
        { 
          title: "2. Loading components asynchronously",
          content: "Whether or not you decide to split your code via it’s routes, the library React Loadable mentioned above also allows you to use the same asynchronous wrapper approach on any component within your project. What this essentially means is that you can easily asynchronously load components after the DOM has completed loading - freeing up time to focus on what’s crucial to get in front of users on slower internet connections. React Loadable allows for placeholder content to be designed, meaning that there may be great UX solutions available to supplement this approach.",
          open: false
        },
        { 
          title: "3. Lazy loading components",
          content: "One slight issue with using React Loadable to asynchronously load components is that there is no way of of the library knowing what’s on or off the screen. If you’d like to use the library to essentially lazy load offscreen components only when needed, then you’re in luck but you’ll need an additional wrapper library which has been approved by the makers of of the original. React Loadable Visibility does just this, utilising the Intersection Observer to allow for lazily loaded React components right when you need them. Please note, browser support for the Intersection Observer is limited, however adding a polyfill will help - and the library is designed to fall back to good old fashioned React Loadable if no support can be found.",
          open: false
        },
        { 
          title: "4. Caching with PWAs",
          content: "Content to be added..",
          open: false
        },
        { 
          title: "5. Managing push notifications via a PWA",
          content: "Content to be added..",
          open: false
        },
      ]
    }

    this.toggleChecklistItem = this.toggleChecklistItem.bind(this);
    this.buildDropdowns = this.buildDropdowns.bind(this);
  }

  buildDropdowns() {
    this.dropdowns = [];
  
    this.state.checklist.forEach((item, key) => {
      this.dropdowns.push(
        <Dropdown
          title={item.title}
          content={item.content}
          action={this.toggleChecklistItem}
          open={item.open}
          key={key}
          index={key} />
      )    
    });

    return this.dropdowns;
  }

  toggleChecklistItem(e) {
    const index = e.target.id;
    const newChecklist = [...this.state.checklist];
    newChecklist[index].open = !newChecklist[index].open;
    this.setState({ checklist: newChecklist });
  }
  
  render() {
    return (
      <div className="home">
        <div className="home__intro">
          <h2>Performance Best Practices</h2>
        </div>
        <div className="home__content">
          { this.buildDropdowns() }
        </div>
      </div>
    );
  }
}

export default PageHome;
