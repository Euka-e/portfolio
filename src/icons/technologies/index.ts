import Angular from "./angular.astro";
import AstroLogo from "./astro.astro";
import Aws from "./aws.astro";
import Docker from "./docker.astro";
import Express from "./express.astro";
import Figma from "./figma.astro";
import Git from "./git.astro";
import Java from "./java.astro";
import JavaScript from "./javascript.astro";
import Jira from "./jira.astro";
import Kubernetes from "./kubernetes.astro";
import Mongo from "./mongo.astro";
import MySql from "./mysql.astro";
import Nest from "./nest.astro";
import Next from "./next.astro";
import Node from "./node.astro";
import PostgreSql from "./postgresql.astro";
import Postman from "./postman.astro";
import Prisma from "./prisma.astro";
import React from "./react.astro";
import Redux from "./redux.astro";
import Scrum from "./scrum.astro";
import TypeScript from "./typescript.astro";

export const techIcons = {
  angular: Angular,
  astro: AstroLogo,
  aws: Aws,
  docker: Docker,
  express: Express,
  figma: Figma,
  git: Git,
  java: Java,
  javascript: JavaScript,
  jira: Jira,
  kubernetes: Kubernetes,
  mongo: Mongo,
  mysql: MySql,
  nest: Nest,
  next: Next,
  node: Node,
  postgresql: PostgreSql,
  postman: Postman,
  prisma: Prisma,
  react: React,
  redux: Redux,
  scrum: Scrum,
  typescript: TypeScript,
} as const;

export type TechIconKey = keyof typeof techIcons;
