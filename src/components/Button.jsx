export default function Button({ styles }) {
  return (
    <button
      type="button"
      className={`bg-blue-gradient rounded-[10px] px-6 py-4 font-poppins text-[18px] font-medium text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
}
