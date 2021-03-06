import React from 'react';
import BasicComponent from './BasicComponent.jsx';
import Util from './Util.js';

/**
 * @original ons-switch
 * @category form
 * @tutorial react/Reference/switch
 * @description
 * [en]   Switch component. The switch can be toggled both by dragging and tapping.
 *     Will automatically displays a Material Design switch on Android devices.
 [/en]
 * [jp][/jp]
 * @example
 * <Switch checked={this.state.checked} onChange={this.onChange} />
 */
class Switch extends BasicComponent {

  constructor(...args) {
    super(...args);

    this.onChange = event => {
      if (this.props.onChange) {
        return this.props.onChange(event);
      }
    };
  }

  componentDidMount() {
    super.componentDidMount();
    this._switch.addEventListener('change', this.onChange);
  }

  componentWillUnmount() {
    this._switch.removeEventListener('change', this.onChange);
  }

  render() {
    var {checked, inputId, ...other} = this.props;

    Util.convert(other, 'disabled');

    if (inputId) {
      other['input-id'] = inputId;
    }
    return (
      <ons-switch ref={(switchElement) => { this._switch = switchElement; }} checked={checked ? '' : null} {...other} />
    );
  }
}

Switch.propTypes = {
    /**
   * @name onChange
   * @type function
   * @description
   *  [en] Called when the value of the switch changes (checked/unchecked) [/en]
   *  [jp] [/jp]
   */
  onChange: React.PropTypes.func,

  /**
   * @name checked
   * @type bool
   * @description
   *  [en] Whether the switch is checked.[/en]
   *  [jp] [/jp]
   */
  checked: React.PropTypes.bool,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en] If set, the switch is disabled.[/en]
   *  [jp] [/jp]
   */
  disabled: React.PropTypes.bool,

  /**
   * @name inputId
   * @type string
   * @description
   *  [en] Specify the `id` attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
   *  [jp] [/jp]
   */
  inputId: React.PropTypes.string
};

export default Switch;
