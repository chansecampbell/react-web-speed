import React from "react";

import Dropdown from "../../components/dropdown";

class PageHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checklist: [
        { 
          title: "Split the routes of your website with React Router and React Loadable",
          content: "Lorem ipsum dolor sit amet, te cibo commune accumsan vis. Eu quando dicunt singulis cum, fierent conclusionemque in nam. Eos iusto ceteros at, in dicunt adversarium mei, eam adhuc praesent ea. An choro urbanitas persecuti est. Ei alterum sensibus duo, aeque quodsi liberavisse ut eum, saperet temporibus te sed.",
          open: false
        },
        { 
          title: "Use React Loadable to also load other components in asynchronously",
          content: "Lorem ipsum dolor sit amet, te cibo commune accumsan vis. Eu quando dicunt singulis cum, fierent conclusionemque in nam. Eos iusto ceteros at, in dicunt adversarium mei, eam adhuc praesent ea. An choro urbanitas persecuti est. Ei alterum sensibus duo, aeque quodsi liberavisse ut eum, saperet temporibus te sed.",
          open: false
        },
        { 
          title: "If you want to lazy load entire components asynchronously, use the React Loadable Visibility wrapper",
          content: "Lorem ipsum dolor sit amet, te cibo commune accumsan vis. Eu quando dicunt singulis cum, fierent conclusionemque in nam. Eos iusto ceteros at, in dicunt adversarium mei, eam adhuc praesent ea. An choro urbanitas persecuti est. Ei alterum sensibus duo, aeque quodsi liberavisse ut eum, saperet temporibus te sed.",
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
          <h2>Web Speed Checklist</h2>
        </div>
        <div className="home__content">
          { this.buildDropdowns() }
        </div>
      </div>
    );
  }
}

export default PageHome;
