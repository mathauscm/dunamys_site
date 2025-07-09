import React from 'react';
import { Container, Card } from '../../common';
import {
  MeetingsContainer,
  MeetingsHeader,
  MeetingsTitle,
  MeetingsSubtitle,
  MeetingsGrid,
  MeetingCard,
  MeetingIcon,
  MeetingTitle,
  MeetingTime,
  MeetingLocation,
  MeetingDescription,
  MeetingTimeGroup,
} from './Meetings.styles';

const meetings = [
  {
    id: 1,
    title: "CULTO DUNAMYS",
    icon: "⛪",
    times: [
      { day: "Domingos", time: "9h30", location: "Tianguá" },
      { day: "Domingos", time: "19h", location: "Ubajara" }
    ],
    description: "A palavra da Fé ministrada com ousadia e debaixo da unção do Espírito Santo. Venha e seja inspirado por Deus para uma semana vitoriosa e sobrenatural."
  },
  {
    id: 2,
    title: "SALA DUNAMYS",
    icon: "👥",
    description: "Momentos de comunhão e crescimento espiritual em pequenos grupos, onde compartilhamos experiências e fortalecemos nossa fé juntos."
  },
  {
    id: 3,
    title: "ENCOUNTER",
    icon: "🙏",
    description: "Encontros especiais para aprofundamento da fé e relacionamento com Deus. Experiências transformadoras que marcam vidas."
  }
];

export const Meetings = () => {
  return (
    <MeetingsContainer id="meetings">
      <Container>
        <MeetingsHeader>
          <MeetingsTitle>Reuniões</MeetingsTitle>
          <MeetingsSubtitle>Vem ser Igreja com a gente!</MeetingsSubtitle>
        </MeetingsHeader>
        
        <MeetingsGrid>
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id}>
              <MeetingIcon>{meeting.icon}</MeetingIcon>
              <MeetingTitle>{meeting.title}</MeetingTitle>
              
              {meeting.times && (
                <MeetingTimeGroup>
                  {meeting.times.map((schedule, index) => (
                    <div key={index}>
                      <MeetingTime>
                        {schedule.day} - {schedule.time}
                      </MeetingTime>
                      <MeetingLocation>
                        {schedule.location}
                      </MeetingLocation>
                    </div>
                  ))}
                </MeetingTimeGroup>
              )}
              
              <MeetingDescription>
                {meeting.description}
              </MeetingDescription>
            </MeetingCard>
          ))}
        </MeetingsGrid>
      </Container>
    </MeetingsContainer>
  );
};