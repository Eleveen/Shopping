import { UiHeader, UiTitle, UiProgressMeter, UiButtonGroup, UiSlider, 
  UiFilterGroup, UiSelect, UiInput, UiLabel, UiRadioButtonGroup, UiRadioButton,
  UiLoadingComponent, UiTabbedView } from 'liveramp-ui-toolkit';
import React from 'react';

const uiLabelSelectOptions = {
  name: "Frequency",
  selectOptions: [
    {value: 1, label: "Day"},
    {value: 2, label: "Week"},
    {value: 3, label: "Month"}
  ],
  isMulti: false,
  selected: null,
  allowCreate: false
};

const sliderMap = {
  1: "Individual",
  2: "Household",
  3: "City",
  4: "State",
  5: "Country",
  6: "Planet",
  7: "Solar System"
};

const buttonGroupEventMap = {
  "Parker": function() {alert("Parker was clicked");},
  "Pardha": function() {alert("Pardha was clicked");},
  "Tevy": function() {alert("Tevy was clicked");}
};

const filterGroupList = [
  {
    name: "Continents",
    selectOptions: [
      {
        label: "North America",
        value: 1
      },
      {
        label: "South America",
        value: 2
      },
      {
        label: "Africa",
        value: 3
      },
      {
        label: "Australia",
        value: 4
      },
      {
        label: "Asia",
        value: 5
      },
      {
        label: "Antarctica",
        value: 6
      },
      {
        label: "Europe",
        value: 7
      }
    ],
    isMulti: true
  },
  {
    name: "Apex Engineers",
    selectOptions: [
      {
        label: "Parker",
        value: 1
      },
      {
        label: "Alfonso",
        value: 2
      },
      {
        label: "Tevy",
        value: 3
      },
      {
        label: "Pardha",
        value: 4
      },
      {
        label: "Uncle Charles",
        value: 5
      },
      {
        label: "Young Charles",
        value: 6
      },
      {
        label: "Josh",
        value: 7
      }
    ],
    isMulti: false
  }
];

const selectOptions = [
  {
    label: "Hillary Clinton",
    value: 1
  },
  {
    label: "Donald Trump",
    value: 2
  }
];

const selectCreateOptions = [
  {
    label: "Hillary Clinton",
    value: 1
  },
  {
    label: "Donald Trump",
    value: 2
  },
  {
    label: "Pardha Ponugoti",
    value: 3,
    disableDelete: true
  }
];

const radioButtonArray = [
  {label: "iOS", value: "0", disabled: false},
  {label: "Android", value: "1", disabled: false},
  {label: "Windows", value: "2", disabled: true}
];

const progressMeterSteps = [
  {name: "Create Source"},
  {name: "Choose Location"},
  {name: "Confirm Headers"},
  {name: "Map Identifiers"},
  {name: "Map to an Audience"},
  {name: "Finished"}
];

const TestForm = React.createClass({
  // The idea behind this form is that it holds all state and then passes callbacks to each component that update the state of this form.
  // I've decided to name the callbacks the same in each case so that our components can all use the same language.

  getInitialState() {
    return {
      titleSwitchOn: true,

      inputValue: "",

      sliderValue: 1,

      selectedByFilterName: {
        'Continents': null,
        'Apex Engineers': null
      },

      selectedField: null,

      multiSelect: null,

      selectedWithCreateField: null,

      labelWithSwitchOn: true,

      labelSelectedField: null,

      selectedRadioButton: null,

      radioButtonActivated: false
    }
  },

  render() {
    return (
      <div id="testform">
        <h4>UI HEADER</h4>
        <UiHeader
          textTitle={"Header"}
          helpText={"This is where the super helpful help text goes"}
          />
        <br/><br/><br/><br/><br/><br/>
        <h4>UI TITLE</h4>
        <UiTitle
          textTitle={ "Title" }
          date={"04/11/1991"}
          showSwitch={true}
          switchOn={this.state.titleSwitchOn}
          handleChange={this.toggleTitle}
          />
        <br/><br/><br/>
        <h4>UI TEXT FIELD</h4>
        <UiInput
          label={"What is your name?"}
          inputValue={this.state.inputValue}
          valid={this.validateInput(this.state.inputValue)}
          placeholder={"Enter name here"}
          handleChange={this.uiInputChange}
          />
        <br/><br/><br/>
        <h4>UI FILTER GROUP</h4>
        <UiFilterGroup
          filterParams={this.buildFilterGroupProps(filterGroupList)}
          handleChange={this.handleFilterGroupChange}
          hideClearAll={true}
          />
        <br/><br/><br/>
        <h4>UI BUTTON GROUP</h4>
        <UiButtonGroup
          labelToEventMap={buttonGroupEventMap}
          />
        <br/><br/><br/>
        <h4>UI SELECT</h4>
        <UiSelect
          arrowOnHover={true}
          label={"President"}
          selected={this.state.selectedField}
          selectOptions={selectOptions}
          placeholder={"POTUS"}
          isMulti={false}
          handleChange={this.uiSelectFieldChange}
          clearable={false}
          />
        <br/><br/><br/>
        <h4>UI MULTI SELECT</h4>
        <UiSelect
          arrowOnHover={false}
          label={"Ninja Turtles"}
          selected={this.state.multiSelect}
          selectOptions={[{value: 1, label: "Donatello"}, {value: 2, label: "Leonardo"}, {value: 3, label: "Raphael"}, {value: 4, label: "Michelangelo"}]}
          placeholder={"Cowabunga"}
          isMulti={true}
          handleChange={this.handleMultiSelectChange}
          clearable={false}
          />
        <br/><br/><br/>
        <h4>UI SELECT FIELD WITH CREATE</h4>
        <UiSelect
          label={"Prez"}
          selected={this.state.selectedWithCreateField}
          selectOptions={selectCreateOptions}
          arrowOnHover={true}
          placeholder={"POTUS"}
          isMulti={true}
          allowCreate={true}
          handleChange={this.handleSelectWithCreateChange}
          canDelete={true}
          handleDelete={(e) => {console.log(e);}}
          />
        <br/><br/><br/>
        <h4>UI RADIO BUTTON</h4>
        <UiRadioButton
          label={ "Radio Button" }
          value={ 0 }
          selected={ this.state.radioButtonActivated }
          disabled={ false }
          handleChange={ this.uiRadioButtonChange }
        />
        <br/>
        <UiRadioButton
          label={ "Disabled Radio Button" }
          buttonValue={ 0 }
          selected={ false }
          disabled={ true }
          handleChange={ this.uiRadioButtonChange }
        />
        <br/>
        <UiRadioButton
          label={ "Disabled Selected Radio Button" }
          buttonValue={ 0 }
          selected={ true }
          disabled={ true }
          handleChange={ this.uiRadioButtonChange }
        />
        <br/><br/><br/>
        <h4>UI RADIO BUTTON GROUP</h4>
        <UiRadioButtonGroup
          title={"Device Type"}
          selected={this.state.selectedRadioButton}
          radioButtonArray={radioButtonArray}
          handleChange={this.uiRadioButtonGroupChange}
          />
        <br/><br/><br/>
        <h4>UI LABEL WITHOUT SWITCH</h4>
        <UiLabel
          label={"Label without switch"}
          showSwitch={false}
          />
        <br/><br/><br/>
        <h4>UI LABEL WITH SWITCH</h4>
        <UiLabel
          label={"Label with switch"}
          showSwitch={true}
          switchOn={this.state.labelWithSwitchOn}
          handleSwitchChange={this.uiLabelSwitchChange}
          />
        <br/><br/><br/>
        <h4>UI LABEL WITH SELECT</h4>
        <UiLabel
          label={"Send notifications every"}
          showSelect={true}
          labelSelectOptions={uiLabelSelectOptions}
          handleSelectChange={(name) => {console.log(name)}}
          />
        <br/><br/><br/>
        <h4>UI TABBED VIEW</h4>
        <UiTabbedView
          tabs={[["tab1", <div>THIS IS TAB 1</div>], ["tab2", <div>THIS IS TAB 2</div>]]}
          />
        <br/><br/><br/>
        <h4>UI SLIDER</h4>
        <UiSlider
          label={"Scope"}
          steps={sliderMap}
          value={this.state.sliderValue}
          handleChange={this.uiSliderChange}
          />
        <br/><br/><br/>
        <h4>UI PROGRESS METER</h4>
        <br/><br/><br/>
        <UiProgressMeter
          steps={progressMeterSteps}
          currentPosition={2}
          />
        <h4>UI LOADING COMPONENT</h4>
        <UiLoadingComponent
          type={"loading"}
          show={true}
          />
        <br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/>
        <UiLoadingComponent
          type={"small"}
          show={true}
          />
        <br/><br/><br/>
        <div className="button" onClick={this.handleSubmit}>Submit</div>
      </div>
    );
  },

  handleSelectWithCreateChange(value) {
    if (value === "") {
      this.setState({
        selectedWithCreateField: []
      });
    } else if (this.state.selectedWithCreateField !== null) {
      this.setState({
        selectedWithCreateField: _.map(value.split(','), (el) => {
          if (isNaN(el)) {
            const newValue = selectCreateOptions[selectCreateOptions.length-1].value + 1;
            selectCreateOptions.push({
              label: el,
              value: newValue
            });
            return newValue;
          } else {
            return parseInt(el);
          }
        })
      });
    } else {
      if (isNaN(value)) {
        const newValue = selectCreateOptions[selectCreateOptions.length-1].value + 1;
        selectCreateOptions.push({
          label: value,
          value: newValue
        });
        this.setState({
          selectedWithCreateField: [newValue]
        });
      } else {
        this.setState({
          selectedWithCreateField: [value]
        })
      }
    }

  },

  newSelectWithCreateChange(value) {
    if (value === "") {
      this.setState({
        selectedWithCreateField: null
      });
    } else if (this.state.selectedWithCreateField !== null) {
      _.each(value.split(','), (el) => {
        if (isNaN(el)) {
          const newValue = selectCreateOptions[selectCreateOptions.length-1].value + 1;
          selectCreateOptions.push({
            label: el,
            value: newValue
          });
          return newValue;
        }
      });
      this.setState({
        selectedWithCreateField: null
      });
    } else {
      if (isNaN(value)) {
        const newValue = selectCreateOptions[selectCreateOptions.length-1].value + 1;
        selectCreateOptions.push({
          label: value,
          value: newValue
        });
        this.setState({
          selectedWithCreateField: null
        });
      } else {
        this.setState({
          selectedWithCreateField: null
        })
      }
    }

  },

  handleMultiSelectChange(value) {
    if (value === "") {
      this.setState({
        multiSelect: []
      });
    } else if (this.state.multiSelect !== null) {
      this.setState({
        multiSelect: _.map(value.split(','), (el) => {
          if (isNaN(el)) {
            const newValue = selectCreateOptions[selectCreateOptions.length-1].value + 1;
            selectCreateOptions.push({
              label: el,
              value: newValue
            });
            return newValue;
          } else {
            return parseInt(el);
          }
        })
      });
    } else {
      if (isNaN(value)) {
        const newValue = selectCreateOptions[selectCreateOptions.length-1].value + 1;
        selectCreateOptions.push({
          label: value,
          value: newValue
        });
        this.setState({
          multiSelect: [newValue]
        });
      } else {
        this.setState({
          multiSelect: [value]
        })
      }
    }
  },

  toggleTitle(e) {
    this.setState({
      titleSwitchOn: !this.state.titleSwitchOn
    });
  },

  uiInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  },

  validateInput(input) {
    return input.length !== 3;
  },

  uiSelectFieldChange(value) {
    this.setState({
      selectedField: value
    });
  },

  uiSelectCreateFieldChange(value) {
    this.setState({
      selectedWithCreateField: value
    });
  },

  createNewSelectOption(name) {
    console.log(name);
    selectCreateOptions.push({value: selectCreateOptions[selectCreateOptions.length - 1].value + 1,  label: name});
    console.log(selectCreateOptions);
  },

  uiLabelSwitchChange(e) {
    this.setState({
      labelWithSwitchOn: !this.state.labelWithSwitchOn
    });
  },

  uiSliderChange(value) {
    this.setState({
      sliderValue: value
    });
  },

  uiRadioButtonChange(e) {
    console.log(e);
    this.setState({
      radioButtonActivated: !this.state.radioButtonActivated
    });
  },

  uiRadioButtonGroupChange(e) {
    this.setState({
      selectedRadioButton: e
    });
  },


  handleFilterGroupChange(isMulti, name, selected) {
    var newSelected;
    if (selected === "") {
      newSelected = isMulti ? [] : null;
    } else {
      newSelected = isMulti ? selected.split(',') : parseInt(selected);
    }
    const newSelectedByFilterName = this.state.selectedByFilterName;
    // newSelectedByFilterName[name] = isMulti ? _.pluck(selected, 'value') : selected.value;
    newSelectedByFilterName[name] = newSelected;
    this.setState({ selectedByFilterName: newSelectedByFilterName });
  },

  buildFilterGroupProps(filters) {
    // combines selected state with filter configurations
    return _.map(filters, (filter) => {
      return _.extend(filter, { selected: this.state.selectedByFilterName[filter.name]} );
    });
  },

  handleSubmit(e) {
    e.preventDefault();

    console.log("SUBMIT");
    console.log(this.state);
    console.log("-----------");
  }
});

module.exports = TestForm;
