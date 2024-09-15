// src/screens/Dictionary/Dictionary.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Dictionary.css';

const Dictionary = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showTranslateModal, setShowTranslateModal] = useState(false);
  const [spanishWord, setSpanishWord] = useState('');
  const [englishWord, setEnglishWord] = useState('');
  const [portugueseWord, setPortugueseWord] = useState('');
  const [wordToDelete, setWordToDelete] = useState('');
  const [wordToTranslate, setWordToTranslate] = useState('');
  const [translation, setTranslation] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('Inglés');
  const [message, setMessage] = useState(''); // Estado para el mensaje

  const dispatch = useDispatch();
  const words = useSelector((state) => state.dictionary.words);

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
    setMessage(''); // Limpiar el mensaje cuando se abre el modal
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const openTranslateModal = () => {
    setShowTranslateModal(true);
    setMessage(''); // Limpiar el mensaje cuando se abre el modal
  };

  const closeTranslateModal = () => {
    setShowTranslateModal(false);
  };

  const handleAddWord = () => {
    if (spanishWord && englishWord && portugueseWord) {
      dispatch({
        type: 'ADD_WORD',
        payload: {
          spanish: spanishWord,
          english: englishWord,
          portuguese: portugueseWord,
        },
      });
      setSpanishWord('');
      setEnglishWord('');
      setPortugueseWord('');
      closeAddModal();
    } else {
      alert('Por favor, ingrese las palabras en los tres idiomas.');
    }
  };

  const handleDeleteWord = () => {
    const word = words.find(
      (w) =>
        w.spanish.toLowerCase() === wordToDelete.toLowerCase() ||
        w.english.toLowerCase() === wordToDelete.toLowerCase() ||
        w.portuguese.toLowerCase() === wordToDelete.toLowerCase()
    );

    if (word) {
      dispatch({
        type: 'DELETE_WORD',
        payload: wordToDelete.toLowerCase(),
      });
      setWordToDelete('');
      closeDeleteModal();
    } else {
      setMessage('Palabra no encontrada en el diccionario.'); // Mensaje si no se encuentra la palabra
    }
  };

  const handleTranslateWord = () => {
    const word = words.find(
      (w) =>
        w.spanish.toLowerCase() === wordToTranslate.toLowerCase() ||
        w.english.toLowerCase() === wordToTranslate.toLowerCase() ||
        w.portuguese.toLowerCase() === wordToTranslate.toLowerCase()
    );

    if (word) {
      switch (targetLanguage) {
        case 'Español':
          setTranslation(word.spanish);
          break;
        case 'Inglés':
          setTranslation(word.english);
          break;
        case 'Portugués':
          setTranslation(word.portuguese);
          break;
        default:
          setTranslation('Idioma no soportado');
      }
    } else {
      setTranslation('Palabra no encontrada en el diccionario.'); // Mensaje si no se encuentra la palabra
    }
  };

  return (
    <div className="dictionary">
      <h1>DICTIONARY USIP</h1>
      <p>
        Este módulo (dictionary) corresponde al recuperatorio del módulo-7 ReactJS. URL:
        <a href="https://limber007.github.io/recupeeratorio_modulo7/Dictionary" target="_blank" rel="noopener noreferrer">
        https://limber007.github.io/recupeeratorio_modulo7/Dictionary
        </a>
      </p>
      <div className="buttons">
        <button onClick={openAddModal}>Agregar Palabra</button>
        <button onClick={openDeleteModal}>Eliminar Palabra</button>
        <button onClick={openTranslateModal}>Traducir</button>
      </div>

      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeAddModal}>&times;</span>
            <h2>Traductor USIP</h2>
            <div className="form-group">
              <label>Espanhol:</label>
              <input
                type="text"
                value={spanishWord}
                onChange={(e) => setSpanishWord(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Inglés:</label>
              <input
                type="text"
                value={englishWord}
                onChange={(e) => setEnglishWord(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Portugués:</label>
              <input
                type="text"
                value={portugueseWord}
                onChange={(e) => setPortugueseWord(e.target.value)}
              />
            </div>
            <button onClick={handleAddWord}>Agregar</button>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeDeleteModal}>&times;</span>
            <h2>Traductor USIP</h2>
            <p>¿Qué palabra desea eliminar del diccionario? Puede escribir su palabra en ESPAÑOL, INGLÉS o PORTUGUÉS</p>
            <div className="form-group">
              <label>Palabra:</label>
              <input
                type="text"
                value={wordToDelete}
                onChange={(e) => setWordToDelete(e.target.value)}
              />
            </div>
            <button onClick={handleDeleteWord}>Eliminar</button>
            {message && <p className="message">{message}</p>} {/* Mostrar mensaje si no se encuentra la palabra */}
          </div>
        </div>
      )}

      {showTranslateModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeTranslateModal}>&times;</span>
            <h2>Traductor USIP</h2>
            <p>¿Qué palabra desea traducir en el diccionario? Agregue su palabra y después el idioma de traducción.</p>
            <div className="form-group">
              <label>Palabra a traducir:</label>
              <input
                type="text"
                value={wordToTranslate}
                onChange={(e) => setWordToTranslate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Idioma de traducción:</label>
              <select
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
              >
                <option value="Español">Español</option>
                <option value="Inglés">Inglés</option>
                <option value="Portugués">Portugués</option>
              </select>
            </div>
            <textarea value={translation} readOnly rows="3" />
            <button onClick={handleTranslateWord}>Traducir</button>
            {translation === 'Palabra no encontrada en el diccionario.' && (
              <p className="message">{translation}</p> // Mostrar mensaje si no se encuentra la palabra
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dictionary;
