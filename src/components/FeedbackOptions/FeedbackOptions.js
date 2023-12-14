import {
  OptionsContainer,
  Button,
  Title,
  StyledBtnBox,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      <Title>Please leave feedback</Title>
      <StyledBtnBox>
        {options.map(option => (
          <Button
            key={option}
            onClick={() => onLeaveFeedback(option)}
            name={option}
            style={
              option === 'bad'
                ? { backgroundColor: 'red' }
                : option === 'neutral'
                ? { backgroundColor: 'yellow' }
                : {}
            }
          >
            {option}
          </Button>
        ))}
      </StyledBtnBox>
    </OptionsContainer>
  );
};
