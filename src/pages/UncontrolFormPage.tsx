import FormButton from '../components/FormButton/FormButton';
// import FormInput from '../components/FormInput/FormInput';
// import FormRadiGroup from '../components/FormRadiGroup/FormRadiGroup';
import styles from './styles.module.css';

const ControlFormPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('test');
  };

  return (
    <div>
      <h1 className={styles['page-title']}>Uncontrol Form Page</h1>
      <form action="/" onSubmit={handleSubmit} className={styles.container}>
        {/* <FormInput
          title="Name"
          placeholder="Enter your name"
          name="userName"
          type="text"
        />
        <FormInput
          title="Age"
          placeholder="Enter your age"
          name="age"
          type="number"
        />
        <FormInput
          title="Email"
          placeholder="Enter your email"
          name="email"
          type="email"
        />
        <FormInput
          title="Password"
          placeholder="Enter your password"
          name="password"
          type="password"
        />
        <FormInput
          title="Confirm password"
          placeholder="Confirm your password"
          name="password"
          type="password"
        />
        <FormRadiGroup />

        <FormInput title="I accept terms and conditions" type="checkbox" />

        <FormInput
          title="Choose avatar"
          name="avatar"
          type="file"
          accept="image/png, image/jpeg"
        /> */}

        <FormButton isDisabled={false} />
      </form>
    </div>
  );
};

export default ControlFormPage;
