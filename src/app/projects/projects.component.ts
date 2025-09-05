import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  url: string;
  img: string;
  description: string;
  category: string[];
}

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  allProjects: Project[] = [
    {
      title: 'Dice Game',
      url: 'https://github.com/lisaupperud/java-a-projektarbete.git',
      img: '../../assets/dice.png',
      description: `This assignment involves creating a simple dice game in Java where two 
          players compete. The game calculates each players total score, and
          the player with the highest score wins. This was my first introduction
          to building a program in Java.`,
      category: ['Backend'],
    },
    {
      title: 'Adventure Game',
      url: 'https://github.com/lisaupperud/java-b-projektarbete.git',
      img: '../../assets/adventure.png',
      description: `This project involves creating a text-based adventure game set in a
          house at night, where the player has to fight off an intruder and call
          the police to win the game. It builds on object-oriented programming
          concepts with classes modeling locations and interactions.`,
      category: ['Backend', 'Unit Test'],
    },
    {
      title: 'Database',
      url: 'https://github.com/lisaupperud/databas-projektarbete.git',
      img: '../../assets/database.png',
      description: `This project is about building a Java application that manages job
          roles using a relational database. It includes full CRUD operations
          for job roles with fields like role ID, title, description, salary,
          and creation date. The application also connects employees to job
          roles and supports user login, using SQL JOINs.`,
      category: ['Database', 'Unit Test'],
    },
    {
      title: 'Web Development',
      url: 'https://lisaupperud.github.io/myWebsite/',
      img: '../../assets/computer.png',
      description: `This responsive website is built using HTML, CSS, and JavaScript
          without frameworks. It features semantic structure, accessible design,
          and consistent styling. Includes a hamburger menu, responsive images,
          and a filterable technology page.`,
      category: ['Frontend'],
    },
    {
      title: 'Frontend + Frameworks & Agile Project Methodology',
      url: 'https://fitness-app-teal-sigma.vercel.app/',
      img: '../../assets/fitness.png',
      description: ` This project is a Single Page Application built with Angular, 
        developed in collaboration between 5 Java developers and 4 UX
        designers. The app is designed to support elderly users in staying
        active.`,
      category: ['Frontend', 'Angular'],
    },
    {
      title: 'Test Driven Development',
      url: 'https://github.com/lisaupperud/CardGame.git',
      img: '../../assets/hand.png',
      description: `A Java-based Go Fish card game developed with TDD principles using
          JUnit 5. Pair-programmed and focuses on clean design and thorough unit
          testing.`,
      category: ['Backend', 'Unit Test'],
    },
    {
      title: 'Cyber Security',
      url: 'https://github.com/nanawally/lisaanna.git',
      img: '../../assets/computer.png',
      description: `A REST API built with Spring Boot, secured with Spring Security and
          JWT. Includes CRUD operations with HSQLDB and a React frontend for a
          clean user experience.`,
      category: ['Frontend', 'React', 'Fullstack', 'Backend', 'API', 'Spring'],
    },
    {
      title: 'Webservices in Java',
      url: 'https://github.com/lisaupperud/ToDo_Webservice.git',
      img: '../../assets/webservice.png',
      description: `This project is a web service built with Spring following the REST architecture. 
          It implements a simple To-Do list to demonstrate our knowledge and practical skills 
          in designing and working with REST APIs. `,
      category: ['Database', 'Spring', 'API', 'Backend'],
    },
  ];

  filteredProjects = [...this.allProjects];

  filterProjects(category: string) {
    if (category === 'all') {
      this.filteredProjects = [...this.allProjects];
    } else {
      this.filteredProjects = this.allProjects.filter((p) =>
        p.category.includes(category)
      );
    }
  }
}
