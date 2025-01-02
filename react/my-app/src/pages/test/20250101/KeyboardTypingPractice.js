import React, { useState, useEffect, useRef } from "react";

const words = [
  "the",
  "of",
  "and",
  "to",
  "in",
  "that",
  "it",
  "was",
  "for",
  "on",
  "are",
  "with",
  "his",
  "they",
  "at",
  "this",
  "have",
  "from",
  "or",
  "one",
  "had",
  "by",
  "word",
  "but",
  "not",
  "what",
  "all",
  "were",
  "when",
  "your",
  "can",
  "said",
  "there",
  "use",
  "an",
  "each",
  "which",
  "she",
  "do",
  "how",
  "their",
  "if",
  "will",
  "up",
  "other",
  "about",
  "out",
  "many",
  "then",
  "them",
  "these",
  "so",
  "some",
  "her",
  "would",
  "make",
  "like",
  "him",
  "into",
  "time",
  "has",
  "look",
  "two",
  "more",
  "write",
  "go",
  "see",
  "number",
  "no",
  "way",
  "could",
  "people",
  "my",
  "than",
  "first",
  "water",
  "been",
  "called",
  "who",
  "oil",
  "now",
  "find",
  "long",
  "down",
  "day",
  "did",
  "get",
  "come",
  "made",
  "may",
  "part",
  "over",
  "new",
  "sound",
  "take",
  "only",
  "little",
  "work",
  "know",
  "place",
  "year",
  "live",
  "me",
  "back",
  "give",
  "most",
  "very",
  "after",
  "thing",
  "our",
  "just",
  "name",
  "good",
  "sentence",
  "man",
  "think",
  "say",
  "great",
  "where",
  "help",
  "through",
  "much",
  "before",
  "line",
  "right",
  "too",
  "means",
  "old",
  "any",
  "same",
  "tell",
  "boy",
  "follow",
  "came",
  "want",
  "show",
  "also",
  "around",
  "form",
  "three",
  "small",
  "set",
  "put",
  "end",
  "does",
  "another",
  "well",
  "large",
  "must",
  "big",
  "even",
  "such",
  "because",
  "turn",
  "here",
  "why",
  "ask",
  "went",
  "men",
  "read",
  "need",
  "land",
  "different",
  "home",
  "us",
  "move",
  "try",
  "kind",
  "hand",
  "picture",
  "again",
  "change",
  "off",
  "play",
  "spell",
  "air",
  "away",
  "animal",
  "house",
  "point",
  "page",
  "letter",
  "mother",
  "answer",
  "found",
  "study",
  "still",
  "learn",
  "should",
  "America",
  "world",
  "high",
  "every",
  "near",
  "add",
  "food",
  "between",
  "own",
  "below",
  "country",
  "plant",
  "last",
  "school",
  "father",
  "keep",
  "tree",
];

const sentences = [
  "Actions speak louder than words.",
  "A picture is worth a thousand words.",
  "A watched pot never boils.",
  "All good things must come to an end.",
  "All that glitters is not gold.",
  "An apple a day keeps the doctor away.",
  "Barking dogs seldom bite.",
  "Beauty is in the eye of the beholder.",
  "Beggars can't be choosers.",
  "Better late than never.",
  "Birds of a feather flock together.",
  "Blood is thicker than water.",
  "Don't bite the hand that feeds you.",
  "Don't count your chickens before they hatch.",
  "Don't cry over spilled milk.",
  "Don't judge a book by its cover.",
  "Easy come, easy go.",
  "Every cloud has a silver lining.",
  "Fortune favors the bold.",
  "God helps those who help themselves.",
  "Good things come to those who wait.",
  "Honesty is the best policy.",
  "If it ain't broke, don't fix it.",
  "If you can't beat them, join them.",
  "Ignorance is bliss.",
  "It takes two to tango.",
  "Laughter is the best medicine.",
  "Let sleeping dogs lie.",
  "Look before you leap.",
  "Love is blind.",
  "Money doesn't grow on trees.",
  "Necessity is the mother of invention.",
  "No pain, no gain.",
  "Once bitten, twice shy.",
  "One man's trash is another man's treasure.",
  "Out of sight, out of mind.",
  "Practice makes perfect.",
  "Rome wasn't built in a day.",
  "The early bird catches the worm.",
  "The grass is always greener on the other side.",
  "The pen is mightier than the sword.",
  "Time and tide wait for no man.",
  "Time is money.",
  "Too many cooks spoil the broth.",
  "Two heads are better than one.",
  "When in Rome, do as the Romans do.",
  "Where there's smoke, there's fire.",
  "You can lead a horse to water, but you can't make it drink.",
  "You reap what you sow.",
  "You can't judge a book by its cover.",
  "A bird in the hand is worth two in the bush.",
  "A chain is only as strong as its weakest link.",
  "A fool and his money are soon parted.",
  "A journey of a thousand miles begins with a single step.",
  "A leopard cannot change its spots.",
  "A penny saved is a penny earned.",
  "A rolling stone gathers no moss.",
  "A stitch in time saves nine.",
  "A trouble shared is a trouble halved.",
  "Absence makes the heart grow fonder.",
  "As you sow, so shall you reap.",
  "Better safe than sorry.",
  "Cleanliness is next to godliness.",
  "Don't burn your bridges.",
  "Don't put all your eggs in one basket.",
  "Every dog has its day.",
  "Failing to plan is planning to fail.",
  "Familiarity breeds contempt.",
  "Give an inch and they'll take a mile.",
  "Haste makes waste.",
  "He who laughs last, laughs best.",
  "History repeats itself.",
  "If the shoe fits, wear it.",
  "If you play with fire, you'll get burned.",
  "It's always darkest before the dawn.",
  "Keep your friends close and your enemies closer.",
  "Knowledge is power.",
  "Lend your money and lose your friend.",
  "Lightning never strikes the same place twice.",
  "Make hay while the sun shines.",
  "Necessity knows no law.",
  "No use crying over spilled milk.",
  "Once a thief, always a thief.",
  "Out of the frying pan and into the fire.",
  "Patience is a virtue.",
  "Penny wise and pound foolish.",
  "Practice what you preach.",
  "Silence is golden.",
  "Strike while the iron is hot.",
  "The squeaky wheel gets the grease.",
  "There's no place like home.",
  "There's no such thing as a free lunch.",
  "Those who live in glass houses shouldn't throw stones.",
  "Too much of a good thing is bad.",
  "Variety is the spice of life.",
  "What goes up must come down.",
  "Where there's a will, there's a way.",
  "While the cat's away, the mice will play.",
  "You can't have your cake and eat it too.",
  "You can't make an omelette without breaking a few eggs.",
];

const getRandomItems = (num, items) => {
  const weightedItems = items.flatMap((item, index) => {
    const region = Math.floor(index / 50);
    const weight = Math.pow(1.1, 3 - region); // 1.1배씩 가중치 부여
    return Array(Math.round(weight)).fill(item);
  });
  const shuffled = weightedItems.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const KeyboardTypingPractice = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [wordsList, setWordsList] = useState(getRandomItems(20, words));
  const [wordResults, setWordResults] = useState([]);
  const [wordStartTime, setWordStartTime] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(true); // 소리내기 체크박스 상태 추가
  const [mode, setMode] = useState("word"); // 모드 상태 추가
  const inputRef = useRef(null);
  const restartButtonRef = useRef(null);

  useEffect(() => {
    if (isSpeaking) {
      speakWord(currentWord);
    }
  }, [currentWord, isSpeaking]);

  useEffect(() => {
    setCurrentWord(wordsList[wordCount]);
    const totalAccuracy = wordResults.reduce((acc, result) => acc + parseFloat(result.accuracy), 0) / 20;
    setAccuracy(totalAccuracy.toFixed(2));
    if (wordCount < 20) {
      inputRef.current.focus();
    }
  }, [wordCount, wordsList, wordResults]);

  useEffect(() => {
    if (wordCount === 20 && restartButtonRef.current) {
      restartButtonRef.current.focus(); // 단어가 끝나면 Restart 버튼에 포커스
    }
  }, [wordCount]);

  const speakWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(utterance);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (!wordStartTime) {
      setWordStartTime(new Date());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const currentTime = new Date();
      const timeDiffMs = currentTime - wordStartTime; // in milliseconds
      const timeDiff = timeDiffMs / 1000 / 60; // in minutes
      const grossWpm = (inputValue.length / timeDiff).toFixed(2); // WPM 계산
      const isCorrect = inputValue.trim() === currentWord;
      const wordAccuracy = isCorrect ? 100 : calculateWordAccuracy(inputValue, currentWord);

      setWordResults([...wordResults, { word: currentWord, input: inputValue, wpm: grossWpm, accuracy: wordAccuracy, time: timeDiffMs }]);

      if (isCorrect) {
        setCorrectCount(correctCount + 1);
      }
      setWordCount(wordCount + 1);
      setInputValue("");
      setWordStartTime(null);

      if (wordCount + 1 === 20) {
        const totalWpm = wordResults.reduce((acc, result) => acc + parseFloat(result.wpm), 0) / 20;
        setWpm(totalWpm.toFixed(2));
      }
    }
  };

  function calculateWordAccuracy(inputValue, currentWord) {
    const inputLength = inputValue.length;
    const wordLength = currentWord.length;

    // Levenshtein Distance 계산
    const distance = levenshteinDistance(inputValue, currentWord);

    // 정확도 계산
    const maxLength = Math.max(inputLength, wordLength);
    const accuracy = ((maxLength - distance) / maxLength) * 100;

    return accuracy.toFixed(2); // 소수점 둘째 자리까지 반올림
  }

  function levenshteinDistance(a, b) {
    const matrix = [];

    // 초기화
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    // 계산
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b[i - 1] === a[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // 교체
            matrix[i][j - 1] + 1, // 삽입
            matrix[i - 1][j] + 1 // 삭제
          );
        }
      }
    }

    return matrix[b.length][a.length];
  }

  const handleRestart = (newMode = mode) => {
    const newWordsList = newMode === "word" ? getRandomItems(20, words) : getRandomItems(20, sentences);
    setWordsList(newWordsList);
    setWordCount(0);
    setCorrectCount(0);
    setWpm(0);
    setAccuracy(0);
    setInputValue("");
    setWordResults([]);
    setWordStartTime(null);
    if (restartButtonRef.current) {
      restartButtonRef.current.focus();
    }
  };

  const handleModeChange = (e) => {
    const newMode = e.target.value;
    setMode(newMode);
    handleRestart(newMode);
  };

  return (
    <div>
      <h1>Typing Practice</h1>
      <label style={{ cursor: "pointer", fontSize: "20px", marginRight: "30px" }}>
        <input
          type="checkbox"
          checked={isSpeaking}
          onChange={() => setIsSpeaking(!isSpeaking)}
          style={{ width: "20px", height: "20px", cursor: "pointer" }} // 체크박스 크기 조정
        />
        Sound
      </label>
      <label style={{ cursor: "pointer", fontSize: "20px" }}>
        <input type="radio" value="word" checked={mode === "word"} onChange={handleModeChange} style={{ cursor: "pointer" }} />
        Word
      </label>
      <label style={{ cursor: "pointer", fontSize: "20px" }}>
        <input type="radio" value="sentence" checked={mode === "sentence"} onChange={handleModeChange} style={{ cursor: "pointer" }} />
        Sentence
      </label>
      {wordCount < 20 ? (
        <div>
          <p style={{ fontSize: "20px" }}>
            Type the {mode} ({wordCount + 1}/20)
            <br />
            <br />
            <strong style={{ fontSize: "20px", marginLeft: "3px" }}>{currentWord}</strong>
          </p>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            ref={inputRef}
            style={{ height: "40px", width: "500px", fontSize: "20px" }} // 높이, 너비, 글자 크기 조정
          />
          {wordResults.length > 0 && (
            <div>
              <p>
                WPM: <strong>{wordResults[wordResults.length - 1].wpm}</strong>
              </p>
              <p>
                Time: <strong>{wordResults[wordResults.length - 1].time / 1000} seconds</strong>
              </p>
              <p>
                Accuracy: <strong>{wordResults[wordResults.length - 1].accuracy}%</strong>
              </p>
              {wordResults[wordResults.length - 1].accuracy < 100 && (
                <div>
                  <p>Input: {wordResults[wordResults.length - 1].input}</p>
                  <p>Correct: {wordResults[wordResults.length - 1].word}</p>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div>
          <p>
            Average Words per minute: <strong>{wpm}</strong>
          </p>
          <p>
            Average Accuracy: <strong>{accuracy}%</strong>
          </p>
          <button onClick={() => handleRestart()} ref={restartButtonRef}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default KeyboardTypingPractice;
