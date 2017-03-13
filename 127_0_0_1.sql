-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Lun 13 Mars 2017 à 06:54
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `pw`
--
CREATE DATABASE IF NOT EXISTS `pw` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `pw`;

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `date_envoie` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `message` text COLLATE latin1_general_ci NOT NULL,
  `pseudo` varchar(30) COLLATE latin1_general_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Contenu de la table `message`
--

INSERT INTO `message` (`date_envoie`, `message`, `pseudo`) VALUES
('2017-03-12 05:27:27', 'Hi all!', 'Skitak'),
('2017-03-12 13:32:07', 'Cyka blyat', 'Russian89'),
('2017-03-12 05:27:27', 'Hi all!', 'Skkwditak'),
('2017-03-12 13:32:07', 'Cyka blyat', 'Russiasdn89'),
('2017-03-12 23:58:27', 'Skitak', 'Olala'),
('2017-03-13 00:05:01', 'sdfgsth', 'Peon'),
('2017-03-13 00:20:31', 'qsdfgqev', 'Peon'),
('2017-03-13 00:48:05', 'Bonjour all!', 'Peon'),
('2017-03-13 00:50:36', 'Hola!', 'Peon'),
('2017-03-13 00:51:29', 'Encore moi!', 'Peon'),
('2017-03-13 00:51:32', 'blblblb', 'Peon'),
('2017-03-13 00:51:34', 'sdkvjn', 'Peon'),
('2017-03-13 00:51:51', 'dfw', 'Peon'),
('2017-03-13 00:54:45', 'idfg', 'Peon'),
('2017-03-13 00:54:49', 'Hola?', 'Peon'),
('2017-03-13 01:02:31', 'Oui?', 'Skitak'),
('2017-03-13 01:07:16', 'Bjr!', 'Skitak'),
('2017-03-13 01:07:55', 'dfh', 'Peon');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `Username` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Password` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Contenu de la table `utilisateur`
--

INSERT INTO `utilisateur` (`Username`, `Password`) VALUES
('Peon', 'Peon'),
('Skitak', '1234');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`date_envoie`,`pseudo`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`Username`),
  ADD UNIQUE KEY `Password` (`Password`);
--
-- Base de données :  `tp`
--
CREATE DATABASE IF NOT EXISTS `tp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `tp`;

-- --------------------------------------------------------

--
-- Structure de la table `avion`
--

CREATE TABLE `avion` (
  `IdAvion` int(11) NOT NULL,
  `Nom` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Ville` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `avion`
--

INSERT INTO `avion` (`IdAvion`, `Nom`, `Ville`) VALUES
(1, 'concorde', 'paris'),
(2, 'soeur', 'Madrid'),
(3, 'olala', 'Montreal');

-- --------------------------------------------------------

--
-- Structure de la table `pilote`
--

CREATE TABLE `pilote` (
  `idPilote` int(11) NOT NULL,
  `idAvion` int(11) NOT NULL,
  `Nom` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Prenom` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `pilote`
--

INSERT INTO `pilote` (`idPilote`, `idAvion`, `Nom`, `Prenom`) VALUES
(1, 1, 'Jack', 'eventreur'),
(2, 2, 'Patrick', 'eventreur aussi :l'),
(3, 1, 'Jean', 'Jack');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
