import React, { useRef } from 'react';
import styled from 'styled-components/native';
import { Transition, Transitioning } from 'react-native-reanimated';

import Images from '../images';
import { AccessibilityState, GestureResponderEvent } from 'react-native';

const bgColors = {
  home: '#ffe1c5',
  logger: '#ffe1c5',
  documents: '#ffe1c5',
  menu: '#ffe1c5',
};

const textColors = {
  home: '#c56b14',
  logger: '#c56b14',
  documents: '#c56b14',
  menu: '#c56b14',
};

const Container = styled.TouchableWithoutFeedback``;

const Background = styled(Transitioning.View)`
  flex: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.focused ? bgColors[props.label] : 'white')};
  border-radius: 100px;
  margin: 12px 20px;
`;
const Icon = styled.Image`
  height: 30px;
  width: 30px;
`;

const Label = styled.Text`
  color: ${(props) => textColors[props.label]};
  font-weight: 600;
  margin-left: 8px;
`;

interface Props {
  label: 'home' | 'documents' | 'logger' | 'menu';
  onPress?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent,
  ) => void;
  accessibilityState?: AccessibilityState;
}

const Tab: React.FC<Props> = ({ label, accessibilityState, onPress }) => {
  const focused = accessibilityState?.selected ?? false;
  const icon = !focused ? Images.icons[label] : Images.icons[`${label}Focused`];

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={0} />
      <Transition.Change interpolation="easeInOut" durationMs={100} />
      <Transition.In type="fade" durationMs={10} />
    </Transition.Sequence>
  );

  const ref = useRef();

  return (
    <Container
      onPress={(
        e:
          | React.MouseEvent<HTMLAnchorElement, MouseEvent>
          | GestureResponderEvent,
      ) => {
        ref.current.animateNextTransition();
        if (onPress) onPress(e);
      }}>
      <Background
        focused={focused}
        label={label}
        ref={ref}
        transition={transition}>
        <Icon source={icon} />
        {focused && (
          <Label label={label}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Label>
        )}
      </Background>
    </Container>
  );
};

export default Tab;
