import RoundedButton from '../RoundedButton';

export default function RoundedButtonExample() {
  return (
    <div className="p-8 bg-background flex gap-4">
      <RoundedButton backgroundColor="#3b82f6">
        <span className="font-medium">Click Me</span>
      </RoundedButton>
      <RoundedButton backgroundColor="transparent">
        <span className="font-medium">Hover Effect</span>
      </RoundedButton>
    </div>
  );
}
