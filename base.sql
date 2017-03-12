

--
-- Base de données: `test`
--

-- --------------------------------------------------------

--
-- Structure de la table `abonné`
--

CREATE TABLE IF NOT EXISTS ABONNE (
  idAbonne int(1) NOT NULL AUTO_INCREMENT,
  nomAbonne VarChar(40) COLLATE utf8_bin NOT NULL,
  prenomAbonne VarChar(40) COLLATE utf8_bin NOT NULL,
  mailAbonne VarChar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (idAbonne, mailAbonne)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

--
-- Contenu de la table `abonné`
--

INSERT INTO ABONNE (nomAbonne, prenomAbonne, mailAbonne) VALUES
("Gimenez","Renan","renan.gimenez@etu.parisdescartes.fr");
("Bouquin","Bastien","bastien.bouquin@etu.parisdescartes.fr");
("Illié","Jean-Michel","jean-michiel.illie@parisdescartes.fr");

