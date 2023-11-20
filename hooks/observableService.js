import { BehaviorSubject } from 'rxjs';

// Initialize BehaviorSubject with an initial value
const behaviorSubject = new BehaviorSubject(null);

// Function to update the value of the BehaviorSubject
const updateValue = (newValue) => {
  behaviorSubject.next(newValue);
};

// Function to subscribe to changes in the BehaviorSubject
const subscribeToValue = (callback) => {
  return behaviorSubject.subscribe({
    next: callback,
  });
};

export { updateValue, subscribeToValue };