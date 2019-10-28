-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-10-2019 a las 17:32:43
-- Versión del servidor: 5.7.19
-- Versión de PHP: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `kimberly_clark`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `motorizados`
--

DROP TABLE IF EXISTS `motorizados`;
CREATE TABLE IF NOT EXISTS `motorizados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` text,
  `apellidos` text,
  `dni` text,
  `email` text,
  `telefono` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `motorizados`
--

INSERT INTO `motorizados` (`id`, `nombre`, `apellidos`, `dni`, `email`, `telefono`) VALUES
(1, 'Daniel', 'Aragon', '77777777', 'daniel.aragon.de.los.suenos.frustrados@sad.com', '123456789');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `nombres` text NOT NULL,
  `apellidos` text NOT NULL,
  `dni` text NOT NULL,
  `rol` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`, `nombres`, `apellidos`, `dni`, `rol`) VALUES
(1, 'admin@kcc.com', '123456789', 'Johnny', 'Ramos', '72721759', 'ADM');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
