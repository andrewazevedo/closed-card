import React, { Component } from 'react';
import ClosedCard from './components/closed-card';

class App extends Component {
  state = {
    title: 'Titulo bem legal aqui',
    labels: [
      { title: 'Story', backgroundColor: 'rgb(224, 43, 237)' },
      { title: 'User', backgroundColor: 'rgb(0, 204, 255)' },
      { title: 'Owner History', backgroundColor: 'rgb(178, 34, 34)' },
    ],
    warnings: [
      { type: 'LATE' },
      { type: 'EXPIRED' }
    ],
    image: 'https://lh3.googleusercontent.com/HICx2vhme87R3FjAoJc3ht7N9IiCbkY5Ph4NuZUuDAhEHBCVzgiufpnAIv2-fXYhpqv77D4Qzg=s640-h400-e365',
    subtitles: ['Subtitle 1'],
    createdTime: '1h30min',
    currentTime: '5h',
    updatedTime: '30min',
    assignee: [
      { name: 'Flavio Muniz', photo: 'https://gravatar.com/avatar/49b0d093674fe784cf3084c0e7fc414f.png?s=128&amp;d=http://dev.pipefy.com:3000/images/user-avatar-default.png' },
      { name: 'Andrew Azevedo', photo: 'https://gravatar.com/avatar/49b0d093674fe784cf3084c0e7fc414f.png?s=128&amp;d=http://dev.pipefy.com:3000/images/user-avatar-default.png' }
    ],
    cardParentName: ['Card parent name', 'Card parent name 2']
  }

  render() {
    const {
      title,
      labels,
      warnings,
      image,
      subtitles,
      createdTime,
      currentTime,
      updatedTime,
      assignee,
      cardParentName
    } = this.state;

    return (
      <ClosedCard
        title={title}
        labels={labels}
        warnings={warnings}
        image={image}
        subtitles={subtitles}
        createdTime={createdTime}
        currentTime={currentTime}
        updatedTime={updatedTime}
        assignee={assignee}
        cardParentName={cardParentName}
      />
    );
  }
}

export default App;
