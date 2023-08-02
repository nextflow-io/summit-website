import React from 'react';
import Tabs from '../../components/Tabs2';

const DateTabs = ({ eventLocation, eventType, loc }) => {
  if (eventLocation === 'boston') {
    return (
      <Tabs location={loc} anchor="#events">
        {eventType === 'hackathon' ? (
          <>
            <Tabs.Item to="/boston/agenda/hackathon/">All</Tabs.Item>
            <Tabs.Item to="/boston/agenda/hackathon/nov-28/">Tue, Nov&nbsp;28</Tabs.Item>
            <Tabs.Item to="/boston/agenda/hackathon/nov-29/">Wed, Nov&nbsp;29</Tabs.Item>
            <Tabs.Item to="/boston/agenda/hackathon/nov-30/">Thu, Nov&nbsp;30</Tabs.Item>
          </>
        ) : (
          <>
            <Tabs.Item to="/boston/agenda/summit/">All</Tabs.Item>
            <Tabs.Item to="/boston/agenda/summit/nov-29/">Wed, Nov&nbsp;29</Tabs.Item>
            <Tabs.Item to="/boston/agenda/summit/nov-30/">Thu, Nov&nbsp;30</Tabs.Item>
          </>
        )}
      </Tabs>
    );
  }
  return (
    <Tabs location={loc} anchor="#events">
      {eventType === 'hackathon' ? (
        <>
          <Tabs.Item to="/agenda/hackathon/">All</Tabs.Item>
          <Tabs.Item to="/agenda/hackathon/oct-16/">Mon, Oct&nbsp;16</Tabs.Item>
          <Tabs.Item to="/agenda/hackathon/oct-17/">Tue, Oct&nbsp;17</Tabs.Item>
          <Tabs.Item to="/agenda/hackathon/oct-18/">Wed, Oct&nbsp;18</Tabs.Item>
        </>
      ) : (
        <>
          <Tabs.Item to="/agenda/summit/">All</Tabs.Item>
          <Tabs.Item to="/agenda/summit/oct-18/">Wed, Oct&nbsp;18</Tabs.Item>
          <Tabs.Item to="/agenda/summit/oct-19/">Thu, Oct&nbsp;19</Tabs.Item>
          <Tabs.Item to="/agenda/summit/oct-20/">Fri, Oct&nbsp;20</Tabs.Item>
        </>
      )}
    </Tabs>
  );
};

export default DateTabs;
