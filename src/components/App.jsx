import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = ({ }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setDad] = useState(0);
   
   countTotalFeedbacks() {
    const total = Object.values({ good, neutral, bad }).reduce(
      (acc, value) => acc + value,
      0
    );
    return total;
  }

  const total = this.countTotalFeedbacks();

  return (
    <>
      <FeedbackOptions
        options={Object.keys(this.state)}
        onLeaveFeedback={this.onLeaveFeedback}
      />
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      )}
      <GlobalStyle />
    </>
  );
}

