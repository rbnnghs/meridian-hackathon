// data/missions.ts

export interface RescueMission {
    id: number;
    animalId: number;
    title: string;
    description: string;
    objectives: string[];
    timeline: string;
    partners: string[];
    status: 'Active' | 'Completed';
    fundraisingGoal: number; // In XLM
    fundsRaised: number; // In XLM
    liveUpdates: string[];
    impactStatistics: {
      rescuedAnimals: number;
      habitatRestored: number; // in hectares
      antiPoachingPatrols: number;
    };
    media: string[]; // URLs to images/videos
  }
  
  export const missions: RescueMission[] = [
    // Missions for Snow Leopard (animalId:1)
    {
      id: 1,
      animalId: 1,
      title: 'Snow Leopard Habitat Restoration',
      description: 'Restore 50 hectares of snow leopard habitat to reduce fragmentation.',
      objectives: ['Plant native vegetation', 'Establish protected areas', 'Implement anti-poaching measures'],
      timeline: '2024-01-01 to 2024-12-31',
      partners: ['Wildlife Conservation Society', 'Local Community Groups'],
      status: 'Active',
      fundraisingGoal: 5000, // 5000 XLM
      fundsRaised: 1500, // 1500 XLM
      liveUpdates: [
        '2024-02-15: Planted 10 hectares of native vegetation.',
        '2024-04-20: Installed 5 new anti-poaching patrol units.',
      ],
      impactStatistics: {
        rescuedAnimals: 3,
        habitatRestored: 10,
        antiPoachingPatrols: 5,
      },
      media: [
        'https://example.com/media/snow-leopard1.jpg',
        'https://example.com/media/snow-leopard2.jpg',
        'https://example.com/media/snow-leopard3.jpg',
      ],
    },
    {
      id: 2,
      animalId: 1,
      title: 'Snow Leopard Medical Treatment',
      description: 'Provide medical care to injured snow leopards in the wild.',
      objectives: ['Capture injured animals safely', 'Provide veterinary care', 'Release back into the habitat'],
      timeline: '2024-03-01 to 2024-09-30',
      partners: ['Veterinary Wildlife Services', 'Local Rangers'],
      status: 'Active',
      fundraisingGoal: 3000,
      fundsRaised: 1200,
      liveUpdates: [
        '2024-03-10: Successfully captured and treated one injured snow leopard.',
        '2024-06-05: Released two snow leopards back into the wild.',
      ],
      impactStatistics: {
        rescuedAnimals: 3,
        habitatRestored: 0,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/snow-leopard-med1.jpg',
        'https://example.com/media/snow-leopard-med2.jpg',
      ],
    },
  
    // Missions for Amur Leopard (animalId:2)
    {
      id: 3,
      animalId: 2,
      title: 'Amur Leopard Anti-Poaching Patrols',
      description: 'Increase anti-poaching patrols in Amur leopard habitats.',
      objectives: ['Deploy 10 patrol units', 'Train local rangers', 'Install surveillance equipment'],
      timeline: '2024-02-01 to 2024-11-30',
      partners: ['International Fund for Animal Welfare', 'Russian Wildlife Rangers'],
      status: 'Active',
      fundraisingGoal: 4000,
      fundsRaised: 2000,
      liveUpdates: [
        '2024-03-20: Deployed 5 new patrol units.',
        '2024-07-15: Trained 15 local rangers in anti-poaching techniques.',
      ],
      impactStatistics: {
        rescuedAnimals: 1,
        habitatRestored: 0,
        antiPoachingPatrols: 10,
      },
      media: [
        'https://example.com/media/amur-patrol1.jpg',
        'https://example.com/media/amur-patrol2.jpg',
      ],
    },
    {
      id: 4,
      animalId: 2,
      title: 'Amur Leopard Community Engagement',
      description: 'Engage local communities to support Amur leopard conservation.',
      objectives: ['Conduct awareness programs', 'Develop eco-friendly livelihoods', 'Establish community watch groups'],
      timeline: '2024-04-01 to 2024-10-31',
      partners: ['Local NGOs', 'Community Leaders'],
      status: 'Active',
      fundraisingGoal: 3500,
      fundsRaised: 1800,
      liveUpdates: [
        '2024-05-10: Held first community awareness workshop.',
        '2024-08-22: Launched eco-friendly handicraft program.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 0,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/amur-community1.jpg',
        'https://example.com/media/amur-community2.jpg',
      ],
    },
  
    // Missions for Javan Rhino (animalId:3)
    {
      id: 5,
      animalId: 3,
      title: 'Javan Rhino Protection Initiative',
      description: 'Protect the remaining Javan rhinos from poaching and habitat loss.',
      objectives: ['Install monitoring cameras', 'Deploy anti-poaching teams', 'Restore degraded habitats'],
      timeline: '2024-01-15 to 2024-12-15',
      partners: ['World Wildlife Fund', 'Local Rangers'],
      status: 'Active',
      fundraisingGoal: 6000,
      fundsRaised: 2500,
      liveUpdates: [
        '2024-02-20: Installed 3 new monitoring cameras.',
        '2024-05-30: Trained 10 anti-poaching officers.',
      ],
      impactStatistics: {
        rescuedAnimals: 2,
        habitatRestored: 15,
        antiPoachingPatrols: 10,
      },
      media: [
        'https://example.com/media/javan-rhino1.jpg',
        'https://example.com/media/javan-rhino2.jpg',
      ],
    },
    {
      id: 6,
      animalId: 3,
      title: 'Javan Rhino Habitat Expansion',
      description: 'Expand the protected habitat area for Javan rhinos.',
      objectives: ['Clear invasive species', 'Plant native flora', 'Establish new protected zones'],
      timeline: '2024-03-01 to 2024-09-30',
      partners: ['Conservation International', 'Local Farmers'],
      status: 'Active',
      fundraisingGoal: 4500,
      fundsRaised: 2000,
      liveUpdates: [
        '2024-04-10: Cleared 5 hectares of invasive species.',
        '2024-07-18: Planted 20 hectares of native flora.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 15,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/javan-habitat1.jpg',
        'https://example.com/media/javan-habitat2.jpg',
      ],
    },
  
    // Missions for Hawksbill Turtle (animalId:4)
    {
      id: 7,
      animalId: 4,
      title: 'Hawksbill Turtle Nesting Sites Protection',
      description: 'Protect and monitor nesting sites of Hawksbill turtles.',
      objectives: ['Secure nesting beaches', 'Monitor turtle nesting activities', 'Educate local communities'],
      timeline: '2024-04-01 to 2024-10-31',
      partners: ['Marine Conservation Institute', 'Local Fishermen Associations'],
      status: 'Active',
      fundraisingGoal: 3000,
      fundsRaised: 1200,
      liveUpdates: [
        '2024-05-05: Secured two new nesting beaches.',
        '2024-08-12: Monitored and recorded 50 nesting turtles.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 0,
        antiPoachingPatrols: 2,
      },
      media: [
        'https://example.com/media/hawksbill1.jpg',
        'https://example.com/media/hawksbill2.jpg',
      ],
    },
    {
      id: 8,
      animalId: 4,
      title: 'Hawksbill Turtle Rehabilitation',
      description: 'Rehabilitate injured Hawksbill turtles and release them back into the wild.',
      objectives: ['Capture injured turtles', 'Provide medical treatment', 'Release healthy turtles'],
      timeline: '2024-06-01 to 2024-12-31',
      partners: ['Veterinary Marine Services', 'Local NGOs'],
      status: 'Active',
      fundraisingGoal: 2500,
      fundsRaised: 1000,
      liveUpdates: [
        '2024-07-15: Rehabilitated one injured turtle.',
        '2024-09-20: Released two healthy turtles back into the ocean.',
      ],
      impactStatistics: {
        rescuedAnimals: 3,
        habitatRestored: 0,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/hawksbill-rehab1.jpg',
        'https://example.com/media/hawksbill-rehab2.jpg',
      ],
    },
  
    // Missions for Vaquita (animalId:5)
    {
      id: 9,
      animalId: 5,
      title: 'Vaquita Bycatch Reduction',
      description: 'Reduce bycatch of Vaquitas in illegal gillnets through community engagement and alternative fishing methods.',
      objectives: ['Install Vaquita-safe nets', 'Train fishermen on sustainable practices', 'Enforce fishing regulations'],
      timeline: '2024-02-01 to 2024-11-30',
      partners: ['Oceanic Preservation Society', 'Local Fishermen Cooperatives'],
      status: 'Active',
      fundraisingGoal: 7000,
      fundsRaised: 3000,
      liveUpdates: [
        '2024-03-10: Installed 50 Vaquita-safe nets.',
        '2024-06-25: Trained 20 fishermen on sustainable fishing practices.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 0,
        antiPoachingPatrols: 5,
      },
      media: [
        'https://example.com/media/vaquita1.jpg',
        'https://example.com/media/vaquita2.jpg',
      ],
    },
    {
      id: 10,
      animalId: 5,
      title: 'Vaquita Conservation Awareness',
      description: 'Increase awareness about Vaquita conservation through education programs and media campaigns.',
      objectives: ['Launch media campaigns', 'Conduct educational workshops', 'Engage local communities'],
      timeline: '2024-04-01 to 2024-10-31',
      partners: ['National Geographic', 'Local Schools'],
      status: 'Active',
      fundraisingGoal: 4000,
      fundsRaised: 1800,
      liveUpdates: [
        '2024-05-20: Launched nationwide media campaign.',
        '2024-08-30: Conducted 10 educational workshops in local schools.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 0,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/vaquita-awareness1.jpg',
        'https://example.com/media/vaquita-awareness2.jpg',
      ],
    },
  
    // Missions for Giant Panda (animalId:6)
    {
      id: 11,
      animalId: 6,
      title: 'Giant Panda Bamboo Restoration',
      description: 'Restore bamboo forests to ensure sustainable food sources for Giant pandas.',
      objectives: ['Plant 1000 bamboo saplings', 'Protect existing bamboo groves', 'Monitor bamboo growth'],
      timeline: '2024-01-01 to 2024-12-31',
      partners: ['World Wildlife Fund', 'Local Forestry Departments'],
      status: 'Active',
      fundraisingGoal: 5000,
      fundsRaised: 2200,
      liveUpdates: [
        '2024-02-15: Planted 200 bamboo saplings in protected areas.',
        '2024-07-10: Protected three existing bamboo groves from logging.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 1000,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/panda-bamboo1.jpg',
        'https://example.com/media/panda-bamboo2.jpg',
      ],
    },
    {
      id: 12,
      animalId: 6,
      title: 'Giant Panda Breeding Program',
      description: 'Enhance the breeding program to increase the Giant panda population.',
      objectives: ['Expand breeding facilities', 'Improve breeding techniques', 'Conduct health check-ups'],
      timeline: '2024-03-01 to 2024-09-30',
      partners: ['Panda Conservation Foundation', 'Veterinary Institutes'],
      status: 'Active',
      fundraisingGoal: 4500,
      fundsRaised: 1800,
      liveUpdates: [
        '2024-04-20: Expanded breeding facilities by 20%.',
        '2024-08-05: Successfully bred two new panda cubs.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 0,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/panda-breeding1.jpg',
        'https://example.com/media/panda-breeding2.jpg',
      ],
    },
  
    // Missions for Sumatran Orangutan (animalId:7)
    {
      id: 13,
      animalId: 7,
      title: 'Sumatran Orangutan Reforestation',
      description: 'Reforest areas to provide habitat corridors for Sumatran orangutans.',
      objectives: ['Plant native trees', 'Remove invasive species', 'Monitor reforested areas'],
      timeline: '2024-01-15 to 2024-12-15',
      partners: ['Rainforest Alliance', 'Local Communities'],
      status: 'Active',
      fundraisingGoal: 6000,
      fundsRaised: 2500,
      liveUpdates: [
        '2024-02-20: Planted 500 native trees in reforestation areas.',
        '2024-05-30: Removed 200 invasive species from key habitats.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 500,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/orangutan1.jpg',
        'https://example.com/media/orangutan2.jpg',
      ],
    },
    {
      id: 14,
      animalId: 7,
      title: 'Sumatran Orangutan Health Monitoring',
      description: 'Monitor and improve the health of wild Sumatran orangutan populations.',
      objectives: ['Conduct health surveys', 'Treat sick individuals', 'Research disease patterns'],
      timeline: '2024-03-01 to 2024-09-30',
      partners: ['Wildlife Health Institute', 'Local Rangers'],
      status: 'Active',
      fundraisingGoal: 4000,
      fundsRaised: 2000,
      liveUpdates: [
        '2024-04-10: Completed health survey in three key areas.',
        '2024-07-18: Treated five sick orangutans successfully.',
      ],
      impactStatistics: {
        rescuedAnimals: 5,
        habitatRestored: 0,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/orangutan-health1.jpg',
        'https://example.com/media/orangutan-health2.jpg',
      ],
    },
  
    // Missions for Black Rhinoceros (animalId:8)
    {
      id: 15,
      animalId: 8,
      title: 'Black Rhinoceros Anti-Poaching Initiative',
      description: 'Enhance anti-poaching efforts to protect Black rhinos from illegal hunting.',
      objectives: ['Deploy additional patrol units', 'Implement drone surveillance', 'Strengthen law enforcement partnerships'],
      timeline: '2024-01-01 to 2024-12-31',
      partners: ['Greenpeace', 'Local Police Forces'],
      status: 'Active',
      fundraisingGoal: 5500,
      fundsRaised: 2200,
      liveUpdates: [
        '2024-02-15: Deployed 5 new patrol units in high-risk areas.',
        '2024-06-25: Installed drone surveillance in two critical habitats.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 0,
        antiPoachingPatrols: 10,
      },
      media: [
        'https://example.com/media/black-rhino1.jpg',
        'https://example.com/media/black-rhino2.jpg',
      ],
    },
    {
      id: 16,
      animalId: 8,
      title: 'Black Rhinoceros Community Outreach',
      description: 'Engage local communities in Black rhinoceros conservation efforts.',
      objectives: ['Conduct educational workshops', 'Promote eco-tourism', 'Establish community watch groups'],
      timeline: '2024-03-01 to 2024-09-30',
      partners: ['Local NGOs', 'Tourism Boards'],
      status: 'Active',
      fundraisingGoal: 3500,
      fundsRaised: 1800,
      liveUpdates: [
        '2024-04-20: Held first community educational workshop.',
        '2024-08-05: Launched eco-tourism packages to support conservation.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 0,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/black-rhino-community1.jpg',
        'https://example.com/media/black-rhino-community2.jpg',
      ],
    },
  
    // Missions for Saola (animalId:9)
    {
      id: 17,
      animalId: 9,
      title: 'Saola Habitat Protection',
      description: 'Protect and expand the natural habitat of Saolas to ensure their survival.',
      objectives: ['Establish protected reserves', 'Monitor habitat health', 'Prevent illegal logging'],
      timeline: '2024-01-15 to 2024-12-15',
      partners: ['Conservation International', 'Local Governments'],
      status: 'Active',
      fundraisingGoal: 7000,
      fundsRaised: 3000,
      liveUpdates: [
        '2024-02-20: Established two new protected reserves.',
        '2024-07-10: Monitored and maintained habitat health in three areas.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 0,
        antiPoachingPatrols: 5,
      },
      media: [
        'https://example.com/media/saola1.jpg',
        'https://example.com/media/saola2.jpg',
      ],
    },
    {
      id: 18,
      animalId: 9,
      title: 'Saola Population Monitoring',
      description: 'Monitor the population dynamics of Saolas to inform conservation strategies.',
      objectives: ['Conduct aerial surveys', 'Install camera traps', 'Analyze population data'],
      timeline: '2024-03-01 to 2024-09-30',
      partners: ['Wildlife Trust', 'Research Institutes'],
      status: 'Active',
      fundraisingGoal: 4000,
      fundsRaised: 1800,
      liveUpdates: [
        '2024-04-10: Completed first aerial survey covering 100 square kilometers.',
        '2024-07-18: Installed 10 new camera traps in key areas.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 0,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/saola-monitor1.jpg',
        'https://example.com/media/saola-monitor2.jpg',
      ],
    },
  
    // Missions for Mountain Gorilla (animalId:10)
    {
      id: 19,
      animalId: 10,
      title: 'Mountain Gorilla Health Program',
      description: 'Enhance the health monitoring and treatment of Mountain gorillas.',
      objectives: ['Conduct regular health check-ups', 'Provide medical treatments', 'Research disease impacts'],
      timeline: '2024-01-01 to 2024-12-31',
      partners: ['Mountain Gorilla Veterinary Group', 'Local Healthcare Providers'],
      status: 'Active',
      fundraisingGoal: 6500,
      fundsRaised: 2800,
      liveUpdates: [
        '2024-02-15: Conducted health check-up for 10 gorillas.',
        '2024-06-25: Treated 2 gorillas with respiratory infections.',
      ],
      impactStatistics: {
        rescuedAnimals: 2,
        habitatRestored: 0,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/gorilla-health1.jpg',
        'https://example.com/media/gorilla-health2.jpg',
      ],
    },
    {
      id: 20,
      animalId: 10,
      title: 'Mountain Gorilla Habitat Conservation',
      description: 'Conserve and expand the natural habitat of Mountain gorillas to support their population growth.',
      objectives: ['Protect existing habitats', 'Restore degraded areas', 'Promote sustainable land use'],
      timeline: '2024-03-01 to 2024-09-30',
      partners: ['Global Wildlife Fund', 'Local Environmental Agencies'],
      status: 'Active',
      fundraisingGoal: 5000,
      fundsRaised: 2200,
      liveUpdates: [
        '2024-04-20: Protected 5 new hectares of gorilla habitat.',
        '2024-08-05: Restored 10 hectares of degraded forest areas.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 10,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/gorilla-habitat1.jpg',
        'https://example.com/media/gorilla-habitat2.jpg',
      ],
    },
  
    // Missions for Red Wolf (animalId:11)
    {
      id: 21,
      animalId: 11,
      title: 'Red Wolf Conservation and Breeding',
      description: 'Promote the conservation and breeding of Red wolves to increase their population.',
      objectives: ['Establish breeding programs', 'Protect natural habitats', 'Educate communities'],
      timeline: '2024-01-15 to 2024-12-15',
      partners: ['Red Wolf Alliance', 'Local Wildlife Agencies'],
      status: 'Active',
      fundraisingGoal: 6000,
      fundsRaised: 2500,
      liveUpdates: [
        '2024-02-20: Started breeding program with 5 Red wolves.',
        '2024-07-10: Protected 10 hectares of Red wolf habitat.',
      ],
      impactStatistics: {
        rescuedAnimals: 3,
        habitatRestored: 0,
        antiPoachingPatrols: 5,
      },
      media: [
        'https://example.com/media/red-wolf1.jpg',
        'https://example.com/media/red-wolf2.jpg',
      ],
    },
    {
      id: 22,
      animalId: 11,
      title: 'Red Wolf Community Engagement',
      description: 'Engage local communities in Red wolf conservation through education and involvement.',
      objectives: ['Conduct workshops', 'Promote coexistence strategies', 'Develop eco-tourism initiatives'],
      timeline: '2024-03-01 to 2024-09-30',
      partners: ['Local NGOs', 'Tourism Boards'],
      status: 'Active',
      fundraisingGoal: 3500,
      fundsRaised: 1800,
      liveUpdates: [
        '2024-04-10: Held first community workshop on Red wolf conservation.',
        '2024-07-18: Launched eco-tourism packages to support Red wolf habitats.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 0,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/red-wolf-community1.jpg',
        'https://example.com/media/red-wolf-community2.jpg',
      ],
    },
  
    // Missions for Sumatran Elephant (animalId:12)
    {
      id: 23,
      animalId: 12,
      title: 'Sumatran Elephant Habitat Protection',
      description: 'Protect and expand the habitat of Sumatran elephants to support their thriving.',
      objectives: ['Enforce anti-logging laws', 'Establish wildlife corridors', 'Restore degraded forests'],
      timeline: '2024-01-01 to 2024-12-31',
      partners: ['Elephant Conservation Society', 'Local Forestry Departments'],
      status: 'Active',
      fundraisingGoal: 7000,
      fundsRaised: 3000,
      liveUpdates: [
        '2024-02-15: Established three new wildlife corridors.',
        '2024-06-25: Restored 20 hectares of degraded forest.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 20,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/sumatran-elephant1.jpg',
        'https://example.com/media/sumatran-elephant2.jpg',
      ],
    },
    {
      id: 24,
      animalId: 12,
      title: 'Sumatran Elephant Anti-Poaching Initiative',
      description: 'Implement anti-poaching measures to safeguard Sumatran elephants from illegal hunting.',
      objectives: ['Deploy anti-poaching units', 'Install surveillance systems', 'Collaborate with law enforcement'],
      timeline: '2024-03-01 to 2024-09-30',
      partners: ['Anti-Poaching Coalition', 'Local Police Forces'],
      status: 'Active',
      fundraisingGoal: 4500,
      fundsRaised: 2000,
      liveUpdates: [
        '2024-04-20: Deployed 5 new anti-poaching units.',
        '2024-08-05: Installed 10 surveillance cameras in key areas.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 0,
        antiPoachingPatrols: 10,
      },
      media: [
        'https://example.com/media/sumatran-elephant-poach1.jpg',
        'https://example.com/media/sumatran-elephant-poach2.jpg',
      ],
    },
  
    // Missions for Kakapo (animalId:13)
    {
      id: 25,
      animalId: 13,
      title: 'Kakapo Breeding Program',
      description: 'Enhance the breeding program to increase the Kakapo population.',
      objectives: ['Expand breeding facilities', 'Monitor breeding pairs', 'Provide veterinary care'],
      timeline: '2024-01-15 to 2024-12-15',
      partners: ['Kakapo Recovery Team', 'Local Conservation Agencies'],
      status: 'Active',
      fundraisingGoal: 5000,
      fundsRaised: 2500,
      liveUpdates: [
        '2024-02-20: Expanded breeding facilities by 30%.',
        '2024-07-10: Monitored and successfully bred two new Kakapo chicks.',
      ],
      impactStatistics: {
        rescuedAnimals: 2,
        habitatRestored: 0,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/kakapo1.jpg',
        'https://example.com/media/kakapo2.jpg',
      ],
    },
    {
      id: 26,
      animalId: 13,
      title: 'Kakapo Habitat Enhancement',
      description: 'Improve and expand the natural habitat of Kakapos to support their survival.',
      objectives: ['Plant native trees', 'Remove invasive species', 'Install nesting boxes'],
      timeline: '2024-03-01 to 2024-09-30',
      partners: ['New Zealand Department of Conservation', 'Local Volunteers'],
      status: 'Active',
      fundraisingGoal: 4000,
      fundsRaised: 2000,
      liveUpdates: [
        '2024-04-10: Planted 100 native trees in key habitat areas.',
        '2024-07-18: Removed 50 invasive plant species from nesting sites.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 100,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/kakapo-habitat1.jpg',
        'https://example.com/media/kakapo-habitat2.jpg',
      ],
    },
  
    // Missions for Saiga Antelope (animalId:14)
    {
      id: 27,
      animalId: 14,
      title: 'Saiga Antelope Anti-Poaching Measures',
      description: 'Implement anti-poaching measures to protect Saiga antelopes from illegal hunting.',
      objectives: ['Deploy patrol teams', 'Install surveillance equipment', 'Strengthen legal frameworks'],
      timeline: '2024-01-01 to 2024-12-31',
      partners: ['Global Wildlife Fund', 'Local Law Enforcement'],
      status: 'Active',
      fundraisingGoal: 6500,
      fundsRaised: 3000,
      liveUpdates: [
        '2024-02-15: Deployed 8 new patrol teams in high-risk areas.',
        '2024-06-25: Installed 15 surveillance cameras along migratory routes.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 0,
        antiPoachingPatrols: 15,
      },
      media: [
        'https://example.com/media/saiga1.jpg',
        'https://example.com/media/saiga2.jpg',
      ],
    },
    {
      id: 28,
      animalId: 14,
      title: 'Saiga Antelope Community Education',
      description: 'Educate local communities about the importance of Saiga antelopes and promote coexistence.',
      objectives: ['Conduct awareness campaigns', 'Develop eco-friendly livelihoods', 'Establish community watch groups'],
      timeline: '2024-03-01 to 2024-09-30',
      partners: ['Local NGOs', 'Educational Institutions'],
      status: 'Active',
      fundraisingGoal: 3500,
      fundsRaised: 1800,
      liveUpdates: [
        '2024-04-10: Launched nationwide awareness campaign.',
        '2024-07-18: Established three community watch groups to monitor Saiga habitats.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 0,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/saiga-education1.jpg',
        'https://example.com/media/saiga-education2.jpg',
      ],
    },
  
    // Missions for Leatherback Sea Turtle (animalId:15)
    {
      id: 29,
      animalId: 15,
      title: 'Leatherback Sea Turtle Bycatch Reduction',
      description: 'Reduce bycatch incidents of Leatherback sea turtles through sustainable fishing practices.',
      objectives: ['Promote turtle-safe fishing gear', 'Educate fishermen', 'Implement bycatch monitoring systems'],
      timeline: '2024-01-15 to 2024-12-15',
      partners: ['Marine Conservation Institute', 'Fishermen Associations'],
      status: 'Active',
      fundraisingGoal: 5000,
      fundsRaised: 2500,
      liveUpdates: [
        '2024-02-20: Distributed 100 turtle-safe nets to local fishermen.',
        '2024-07-10: Conducted training sessions on sustainable fishing practices.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 0,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/leatherback1.jpg',
        'https://example.com/media/leatherback2.jpg',
      ],
    },
    {
      id: 30,
      animalId: 15,
      title: 'Leatherback Sea Turtle Nesting Site Protection',
      description: 'Protect nesting sites of Leatherback sea turtles to ensure successful reproduction.',
      objectives: ['Secure nesting beaches', 'Monitor nesting activities', 'Prevent habitat destruction'],
      timeline: '2024-03-01 to 2024-09-30',
      partners: ['Sea Turtle Conservancy', 'Local Environmental Agencies'],
      status: 'Active',
      fundraisingGoal: 4000,
      fundsRaised: 2000,
      liveUpdates: [
        '2024-04-10: Secured three new nesting beaches.',
        '2024-07-18: Monitored and recorded 30 nesting events.',
      ],
      impactStatistics: {
        rescuedAnimals: 0,
        habitatRestored: 0,
        antiPoachingPatrols: 0,
      },
      media: [
        'https://example.com/media/leatherback-nesting1.jpg',
        'https://example.com/media/leatherback-nesting2.jpg',
      ],
    },
  ];
  