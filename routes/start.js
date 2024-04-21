//const express = require("express");
//const UsersController = require("../controlers/UsersControllers");
import express from "express";
import UsersController from "../controllers/UsersControllers.js";
import AuthentificationController from "../controllers/AuthentificationController.js";
import AuthentificationMiddleware from "../middlewares/AuthentificationMiddleware.js";

const router = express.Router();

router.get("/users", UsersController.index); // LISTE DES UTILISATEURS
router.post("/users", UsersController.store); // AJOUTER UN UTILISATEUR
router.get("/users/id:", UsersController.show); // AFFICHER UN UTILISATEUR
router.put("/users.id:", UsersController.update); // MODIFIER UN UTILISATEUR
router.delete("/users/id:", UsersController.destroy); // SUPPRIMER UN UTILISATEUR
router.get("/getMyPRofile", AuthentificationMiddleware.authentification, UsersController.getMyProfile);
router.post("/login", AuthentificationController.login);

export default router;
