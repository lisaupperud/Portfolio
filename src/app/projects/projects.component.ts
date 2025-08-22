import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

interface Project {
  title: string;
  links: { text: string; url: string }[];
  courses: string[];
  description: string;
}

@Component({
  selector: 'app-projects',
  imports: [NgForOf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  expandedIndex: number | null = null;

  projects: Project[] = [
    {
      title: 'Dice Game',
      links: [
        {
          text: 'Git Repository',
          url: 'https://github.com/lisaupperud/java-a-projektarbete.git',
        },
      ],
      courses: ['Java A'],
      description: `This assignment involves creating a simple dice game in Java where two
      players compete by rolling a dice twice each. The game calculates each
      player's total score, and the player with the highest score wins.
      This was my first introduction to building a program in Java. I have
      since gone back to the code to refactor and use the things I've learned
      throughout the year.`,
    },
    {
      title: 'Adventure Game',
      links: [
        {
          text: 'Git Repository',
          url: 'https://github.com/lisaupperud/java-b-projektarbete.git',
        },
      ],
      courses: ['Java B'],
      description: `This project involves creating a text-based adventure game set in a
      house at night, where the player has to fight off an intruder and call
      the police to win the game. It builds on object-oriented programming
      concepts with classes modeling locations and interactions.`,
    },
    {
      title: 'Database',
      links: [
        {
          text: 'Git Repository',
          url: 'https://github.com/lisaupperud/databas-projektarbete.git',
        },
      ],
      courses: ['Database Management'],
      description: `This project is about building a Java application that manages job roles
      using a relational database. It includes full CRUD operations for job
      roles with fields like role ID, title, description, salary, and creation
      date. The application also connects employees to job roles and supports
      user login, using SQL JOINs.`,
    },
    {
      title: 'My First Website',
      links: [
        { text: 'Website', url: 'https://lisaupperud.github.io/myWebsite/' },
        {
          text: 'Git Repository',
          url: 'https://github.com/lisaupperud/myWebsite.git',
        },
      ],
      courses: ['Web Development'],
      description: `This responsive website is built using HTML, CSS, and JavaScript without
      frameworks. It features semantic structure, accessible design, and
      consistent styling. Includes a hamburger menu, responsive images, and
      a filterable technology page.`,
    },
    {
      title: 'Fitness App: "Starka År"',
      links: [
        { text: 'Website', url: 'https://fitness-app-teal-sigma.vercel.app/' },
        {
          text: 'Git Repository',
          url: 'https://github.com/StevenJTK/Fitness-App.git',
        },
      ],
      courses: ['Frontend and Frameworks', 'Agile Project Methodology'],
      description: `A Single Page Application built with Angular, developed with 5 Java
      developers and 4 UX designers. Helps elderly users stay active by
      selecting difficulty levels and curated workout sessions.`,
    },
    {
      title: 'Go Fish',
      links: [
        {
          text: 'Git Repository',
          url: 'https://github.com/lisaupperud/CardGame.git',
        },
      ],
      courses: ['Testdriven Development'],
      description: `A Java-based Go Fish card game developed with TDD principles using JUnit 5.
      Pair-programmed and focuses on clean design and thorough unit testing.`,
    },
    {
      title: 'REST API with Spring Security & React',
      links: [
        {
          text: 'Git Repository',
          url: 'https://github.com/nanawally/lisaanna.git',
        },
      ],
      courses: ['IT and Information Security'],
      description: `A REST API built with Spring Boot, secured with Spring Security and JWT.
      Includes CRUD operations with HSQLDB and a React frontend for a clean user experience.`,
    },
  ];

  toggleExpand(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
