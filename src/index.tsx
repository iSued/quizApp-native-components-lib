import { NativeModules } from 'react-native';

type QuizAppReactNativeLibType = {
  multiply(a: number, b: number): Promise<number>;
};

const { QuizAppReactNativeLib } = NativeModules;

export default QuizAppReactNativeLib as QuizAppReactNativeLibType;
