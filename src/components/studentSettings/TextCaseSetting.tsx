import { SwitchItem } from 'components';
import { i18n } from 'locale';
import React from 'react';

interface Props {
  value: boolean;
  onValueChange: (isUpperCase: boolean) => void;
}

export class TextCaseSetting extends React.PureComponent<Props> {
  render() {
    return (
      <SwitchItem
        label={i18n.t('studentSettings:uppercase')}
        value={this.props.value}
        onValueChange={this.props.onValueChange}
      />
    );
  }
}
