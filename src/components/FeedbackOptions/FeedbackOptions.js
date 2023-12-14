import { OptionsContainer, Button, Title } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      <Title>Please leave feedback</Title>
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
    </OptionsContainer>
  );
};
