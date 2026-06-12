/*************************** 
 * Portuguese_Valence *
 ***************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'portuguese_valence';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'pix',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(questionnaireRoutineBegin());
flowScheduler.add(questionnaireRoutineEachFrame());
flowScheduler.add(questionnaireRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);



flowScheduler.add(instructions_2RoutineBegin());
flowScheduler.add(instructions_2RoutineEachFrame());
flowScheduler.add(instructions_2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'loopTemplate1.xlsx', 'path': 'loopTemplate1.xlsx'},
    {'name': 'scripts_1_2_3_.csv', 'path': 'scripts_1_2_3_.csv'},
    {'name': 'scripts_1_2_3_.csv', 'path': 'scripts_1_2_3_.csv'},
    {'name': 'demographic_survey.json', 'path': 'demographic_survey.json'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var questionnaireClock;
var key_resp_questionnaire;
var instructionsClock;
var instructions_text;
var key_resp;
var escolha;
var script_selecionado;
var minhas_linhas;
var buffer_treinoClock;
var buffer_treino_text;
var treinoClock;
var stim_treino;
var slider_treino;
var instructions_2Clock;
var instructions_text_2;
var key_resp_2;
var bufferClock;
var buffer_text;
var valenceClock;
var stim_text;
var slider;
var endClock;
var end_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "questionnaire"
  questionnaireClock = new util.Clock();
  key_resp_questionnaire = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instructions_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_text',
    text: 'Instruções\n\n\nNa tela seguinte você verá uma palavra e deverá julgá-la na escala de acordo com a forma que você se sente, sendo 01 o mais negativo e 7 o mais positivo.\n\nVocê terá cerca de 15 segundos para avaliar cada palavra.\n\nVamos começar com um treinamento.\n\n\nPressione ESPAÇO para continuar.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 25.0,  wrapWidth: 1200.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code
  
          // add-on: list(s: string): string[]
          function list(s) {
              // if s is a string, we return a list of its characters
              if (typeof s === 'string')
                  return s.split('');
              else
                  // otherwise we return s:
                  return s;
          }
  
          escolha = list([1, 2, 3]);
  util.shuffle(escolha);
  script_selecionado = escolha[0];
  if ((script_selecionado === 1)) {
      minhas_linhas = "0:158";
  } else {
      if ((script_selecionado === 2)) {
          minhas_linhas = "158:316";
      } else {
          minhas_linhas = "316:473";
      }
  }
  
  // Initialize components for Routine "buffer_treino"
  buffer_treinoClock = new util.Clock();
  buffer_treino_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'buffer_treino_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "treino"
  treinoClock = new util.Clock();
  stim_treino = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_treino',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 200], draggable: false, height: 50.0,  wrapWidth: 100.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_treino = new visual.Slider({
    win: psychoJS.window, name: 'slider_treino',
    startValue: undefined,
    size: [1200, 50], pos: [0, (- 100)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1- Muito Negativo", "2", "3", "4", "5", "6", "7- Muito Positivo"], fontSize: 25.0, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('Black'), markerColor: new util.Color((0.0000, 0.0000, 0.0000)), lineColor: new util.Color('Black'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  // Initialize components for Routine "instructions_2"
  instructions_2Clock = new util.Clock();
  instructions_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_text_2',
    text: 'Instruções\n\n\nFinalizamos o treinamento.\n\nAgora você deverá julgar uma lista de palavras que virá a seguir.\n\nLembre-se, você terá 15 segundos para avaliar cada palavra.\n\n\nPressione ESPAÇO para continuar.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 25.0,  wrapWidth: 1200.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "buffer"
  bufferClock = new util.Clock();
  buffer_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'buffer_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 20.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "valence"
  valenceClock = new util.Clock();
  stim_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 200], draggable: false, height: 50.0,  wrapWidth: 100.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: undefined,
    size: [1200, 50], pos: [0, (- 100)], ori: 0.0, units: psychoJS.window.units,
    labels: ["1- Muito Negativo", "2", "3", "4", "5", "6", "7- Muito Positivo"], fontSize: 25.0, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('Black'), markerColor: new util.Color('Red'), lineColor: new util.Color('Black'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Obrigada por sua participação.\n\n\nPor favor, aguarde enquanto as suas respostas estão sendo salvas.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 25.0,  wrapWidth: 1200.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var questionnaireMaxDurationReached;
var _key_resp_questionnaire_allKeys;
var questionnaireMaxDuration;
var questionnaireComponents;
function questionnaireRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'questionnaire' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    questionnaireClock.reset();
    routineTimer.reset();
    questionnaireMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_questionnaire
    // load SurveyJS CSS (Pavlovia survey theme)
    for (const href of [
      './lib/vendors/surveyjs.defaultV2-1.9.126-OST.min.css',
      './lib/vendors/survey.widgets.css',
      './lib/vendors/survey.grey_style.css'
    ]) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
    
    // load jQuery and the SurveyJS jQuery plugin (window.Survey) if needed
    const questionnaireLoadScript = (src) => new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(script);
    });
    
    if (typeof window.jQuery === 'undefined') {
      await questionnaireLoadScript('./lib/vendors/jquery-3.5.1.min.js');
    }
    if (typeof window.Survey === 'undefined') {
      await questionnaireLoadScript('./lib/vendors/surveyjs.jquery-1.9.126.min.js');
    }
    
    // build and display the questionnaire
    window.questionnaireSurvey = new visual.Survey({
      win: psychoJS.window,
      name: 'questionnaire'
    });
    window.questionnaireSurvey.setModel('demographic_survey.json');
    window.questionnaireSurvey.setAutoDraw(true);
    questionnaireComponents.push(key_resp_questionnaire);
    key_resp_questionnaire.status = PsychoJS.Status.FINISHED;
    
    key_resp_questionnaire.keys = undefined;
    key_resp_questionnaire.rt = undefined;
    _key_resp_questionnaire_allKeys = [];
    psychoJS.experiment.addData('questionnaire.started', globalClock.getTime());
    questionnaireMaxDuration = null
    // keep track of which components have finished
    questionnaireComponents = [];
    questionnaireComponents.push(key_resp_questionnaire);
    
    for (const thisComponent of questionnaireComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function questionnaireRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'questionnaire' ---
    // get current time
    t = questionnaireClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_questionnaire
    if (!window.questionnaireSurvey.isCompleted) {
      return Scheduler.Event.FLIP_REPEAT;
    }
    
    
    // *key_resp_questionnaire* updates
    if (t >= 0.0 && key_resp_questionnaire.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_questionnaire.tStart = t;  // (not accounting for frame time here)
      key_resp_questionnaire.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_questionnaire.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_questionnaire.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_questionnaire.clearEvents(); });
    }
    
    // if key_resp_questionnaire is active this frame...
    if (key_resp_questionnaire.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_questionnaire.getKeys({
        keyList: typeof 'return' === 'string' ? ['return'] : 'return', 
        waitRelease: false
      });
      _key_resp_questionnaire_allKeys = _key_resp_questionnaire_allKeys.concat(theseKeys);
      if (_key_resp_questionnaire_allKeys.length > 0) {
        key_resp_questionnaire.keys = _key_resp_questionnaire_allKeys[_key_resp_questionnaire_allKeys.length - 1].name;  // just the last key pressed
        key_resp_questionnaire.rt = _key_resp_questionnaire_allKeys[_key_resp_questionnaire_allKeys.length - 1].rt;
        key_resp_questionnaire.duration = _key_resp_questionnaire_allKeys[_key_resp_questionnaire_allKeys.length - 1].duration;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of questionnaireComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function questionnaireRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'questionnaire' ---
    for (const thisComponent of questionnaireComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('questionnaire.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_questionnaire
    window.questionnaireSurvey.setAutoDraw(false);
    window.questionnaireSurvey.hide();
    
    const questionnaireResponse = window.questionnaireSurvey.getResponse();
    for (const key in questionnaireResponse) {
      const cleanKey = key.replace('block_1/', '');
      psychoJS.experiment.addData(`questionnaire_${cleanKey}`, questionnaireResponse[key]);
    }
    
    await window.questionnaireSurvey.save();
    
    if (questionnaireResponse['block_1/consentimento'] === 'Afirmo que li e não desejo participar do experimento.') {
      psychoJS.experiment.nextEntry();
      return quitPsychoJS('Obrigado pela sua participação.', true);
    }
    key_resp_questionnaire.stop();
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_questionnaire.corr, level);
    }
    psychoJS.experiment.addData('key_resp_questionnaire.keys', key_resp_questionnaire.keys);
    if (typeof key_resp_questionnaire.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_questionnaire.rt', key_resp_questionnaire.rt);
        psychoJS.experiment.addData('key_resp_questionnaire.duration', key_resp_questionnaire.duration);
        }
    
    key_resp_questionnaire.stop();
    // the Routine "questionnaire" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionsMaxDurationReached;
var _key_resp_allKeys;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instructions_text);
    instructionsComponents.push(key_resp);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_text* updates
    if (t >= 0.0 && instructions_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_text.tStart = t;  // (not accounting for frame time here)
      instructions_text.frameNStart = frameN;  // exact frame index
      
      instructions_text.setAutoDraw(true);
    }
    
    
    // if instructions_text is active this frame...
    if (instructions_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'loopTemplate1.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(buffer_treinoRoutineBegin(snapshot));
      trials_2LoopScheduler.add(buffer_treinoRoutineEachFrame());
      trials_2LoopScheduler.add(buffer_treinoRoutineEnd(snapshot));
      trials_2LoopScheduler.add(treinoRoutineBegin(snapshot));
      trials_2LoopScheduler.add(treinoRoutineEachFrame());
      trials_2LoopScheduler.add(treinoRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'scripts_1_2_3_.csv', minhas_linhas),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(bufferRoutineBegin(snapshot));
      trialsLoopScheduler.add(bufferRoutineEachFrame());
      trialsLoopScheduler.add(bufferRoutineEnd(snapshot));
      trialsLoopScheduler.add(valenceRoutineBegin(snapshot));
      trialsLoopScheduler.add(valenceRoutineEachFrame());
      trialsLoopScheduler.add(valenceRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var buffer_treinoMaxDurationReached;
var buffer_treinoMaxDuration;
var buffer_treinoComponents;
function buffer_treinoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'buffer_treino' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    buffer_treinoClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    buffer_treinoMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('buffer_treino.started', globalClock.getTime());
    buffer_treinoMaxDuration = null
    // keep track of which components have finished
    buffer_treinoComponents = [];
    buffer_treinoComponents.push(buffer_treino_text);
    
    for (const thisComponent of buffer_treinoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function buffer_treinoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'buffer_treino' ---
    // get current time
    t = buffer_treinoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *buffer_treino_text* updates
    if (t >= 0.0 && buffer_treino_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buffer_treino_text.tStart = t;  // (not accounting for frame time here)
      buffer_treino_text.frameNStart = frameN;  // exact frame index
      
      buffer_treino_text.setAutoDraw(true);
    }
    
    
    // if buffer_treino_text is active this frame...
    if (buffer_treino_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (buffer_treino_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      buffer_treino_text.tStop = t;  // not accounting for scr refresh
      buffer_treino_text.frameNStop = frameN;  // exact frame index
      // update status
      buffer_treino_text.status = PsychoJS.Status.FINISHED;
      buffer_treino_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of buffer_treinoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function buffer_treinoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'buffer_treino' ---
    for (const thisComponent of buffer_treinoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('buffer_treino.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (buffer_treinoMaxDurationReached) {
        buffer_treinoClock.add(buffer_treinoMaxDuration);
    } else {
        buffer_treinoClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var treinoMaxDurationReached;
var treinoMaxDuration;
var treinoComponents;
function treinoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'treino' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    treinoClock.reset(routineTimer.getTime());
    routineTimer.add(15.000000);
    treinoMaxDurationReached = false;
    // update component parameters for each repeat
    slider_treino.reset()
    psychoJS.experiment.addData('treino.started', globalClock.getTime());
    treinoMaxDuration = null
    // keep track of which components have finished
    treinoComponents = [];
    treinoComponents.push(stim_treino);
    treinoComponents.push(slider_treino);
    
    for (const thisComponent of treinoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function treinoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'treino' ---
    // get current time
    t = treinoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim_treino* updates
    if (t >= 0.0 && stim_treino.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      stim_treino.setText(Palavra, false);
      // keep track of start time/frame for later
      stim_treino.tStart = t;  // (not accounting for frame time here)
      stim_treino.frameNStart = frameN;  // exact frame index
      
      stim_treino.setAutoDraw(true);
    }
    
    
    // if stim_treino is active this frame...
    if (stim_treino.status === PsychoJS.Status.STARTED) {
      // update params
      stim_treino.setText(Palavra, false);
    }
    
    frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stim_treino.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      stim_treino.tStop = t;  // not accounting for scr refresh
      stim_treino.frameNStop = frameN;  // exact frame index
      // update status
      stim_treino.status = PsychoJS.Status.FINISHED;
      stim_treino.setAutoDraw(false);
    }
    
    
    // *slider_treino* updates
    if (t >= 0.0 && slider_treino.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_treino.tStart = t;  // (not accounting for frame time here)
      slider_treino.frameNStart = frameN;  // exact frame index
      
      slider_treino.setAutoDraw(true);
    }
    
    
    // if slider_treino is active this frame...
    if (slider_treino.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (slider_treino.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      slider_treino.tStop = t;  // not accounting for scr refresh
      slider_treino.frameNStop = frameN;  // exact frame index
      // update status
      slider_treino.status = PsychoJS.Status.FINISHED;
      slider_treino.setAutoDraw(false);
    }
    
    
    // Check slider_treino for response to end Routine
    if (slider_treino.getRating() !== undefined && slider_treino.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of treinoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function treinoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'treino' ---
    for (const thisComponent of treinoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('treino.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_treino.response', slider_treino.getRating());
    psychoJS.experiment.addData('slider_treino.rt', slider_treino.getRT());
    if (routineForceEnded) {
        routineTimer.reset();} else if (treinoMaxDurationReached) {
        treinoClock.add(treinoMaxDuration);
    } else {
        treinoClock.add(15.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_2MaxDurationReached;
var _key_resp_2_allKeys;
var instructions_2MaxDuration;
var instructions_2Components;
function instructions_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructions_2Clock.reset();
    routineTimer.reset();
    instructions_2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('instructions_2.started', globalClock.getTime());
    instructions_2MaxDuration = null
    // keep track of which components have finished
    instructions_2Components = [];
    instructions_2Components.push(instructions_text_2);
    instructions_2Components.push(key_resp_2);
    
    for (const thisComponent of instructions_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_2' ---
    // get current time
    t = instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_text_2* updates
    if (t >= 0.0 && instructions_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_text_2.tStart = t;  // (not accounting for frame time here)
      instructions_text_2.frameNStart = frameN;  // exact frame index
      
      instructions_text_2.setAutoDraw(true);
    }
    
    
    // if instructions_text_2 is active this frame...
    if (instructions_text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_2' ---
    for (const thisComponent of instructions_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var bufferMaxDurationReached;
var bufferMaxDuration;
var bufferComponents;
function bufferRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'buffer' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    bufferClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    bufferMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('buffer.started', globalClock.getTime());
    bufferMaxDuration = null
    // keep track of which components have finished
    bufferComponents = [];
    bufferComponents.push(buffer_text);
    
    for (const thisComponent of bufferComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function bufferRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'buffer' ---
    // get current time
    t = bufferClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *buffer_text* updates
    if (t >= 0.0 && buffer_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buffer_text.tStart = t;  // (not accounting for frame time here)
      buffer_text.frameNStart = frameN;  // exact frame index
      
      buffer_text.setAutoDraw(true);
    }
    
    
    // if buffer_text is active this frame...
    if (buffer_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (buffer_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      buffer_text.tStop = t;  // not accounting for scr refresh
      buffer_text.frameNStop = frameN;  // exact frame index
      // update status
      buffer_text.status = PsychoJS.Status.FINISHED;
      buffer_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of bufferComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function bufferRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'buffer' ---
    for (const thisComponent of bufferComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('buffer.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (bufferMaxDurationReached) {
        bufferClock.add(bufferMaxDuration);
    } else {
        bufferClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var valenceMaxDurationReached;
var valenceMaxDuration;
var valenceComponents;
function valenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'valence' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    valenceClock.reset();
    routineTimer.reset();
    valenceMaxDurationReached = false;
    // update component parameters for each repeat
    slider.reset()
    psychoJS.experiment.addData('valence.started', globalClock.getTime());
    valenceMaxDuration = null
    // keep track of which components have finished
    valenceComponents = [];
    valenceComponents.push(stim_text);
    valenceComponents.push(slider);
    
    for (const thisComponent of valenceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function valenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'valence' ---
    // get current time
    t = valenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim_text* updates
    if (t >= 0.0 && stim_text.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      stim_text.setText(palavra, false);
      // keep track of start time/frame for later
      stim_text.tStart = t;  // (not accounting for frame time here)
      stim_text.frameNStart = frameN;  // exact frame index
      
      stim_text.setAutoDraw(true);
    }
    
    
    // if stim_text is active this frame...
    if (stim_text.status === PsychoJS.Status.STARTED) {
      // update params
      stim_text.setText(palavra, false);
    }
    
    frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stim_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      stim_text.tStop = t;  // not accounting for scr refresh
      stim_text.frameNStop = frameN;  // exact frame index
      // update status
      stim_text.status = PsychoJS.Status.FINISHED;
      stim_text.setAutoDraw(false);
    }
    
    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }
    
    
    // if slider is active this frame...
    if (slider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check slider for response to end Routine
    if (slider.getRating() !== undefined && slider.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of valenceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function valenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'valence' ---
    for (const thisComponent of valenceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('valence.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // the Routine "valence" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    endClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    endMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }
    
    
    // if end_text is active this frame...
    if (end_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (end_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      end_text.tStop = t;  // not accounting for scr refresh
      end_text.frameNStop = frameN;  // exact frame index
      // update status
      end_text.status = PsychoJS.Status.FINISHED;
      end_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (endMaxDurationReached) {
        endClock.add(endMaxDuration);
    } else {
        endClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
