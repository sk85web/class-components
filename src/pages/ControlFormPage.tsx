import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  Controller,
} from 'react-hook-form';

import FormButton from '../components/FormButton/FormButton';
import styles from './styles.module.css';
import FormInputControl from '../components/FormInputControl/FormInputControl';
import FormCheckControl from '../components/FormCheckControl/FormCheckControl';
import { FormValues } from '../types';
import { useDispatch } from 'react-redux';
import {
  setAge,
  setAvatar,
  setEmail,
  setGender,
  setName,
} from '../redux/slices/controlFormSlice';

const ControlFormPage = () => {
  const dispatch = useDispatch();
  const form = useForm<FormValues>();
  const { control, register, handleSubmit } = form;

  const onSubmit: SubmitHandler<FormValues> = data => {
    dispatch(setName(data.username));
    dispatch(setEmail(data.email));
    dispatch(setAge(data.age));
    dispatch(setGender(data.gender));
    dispatch(setAvatar(data.avatar));
  };

  const onError: SubmitErrorHandler<FormValues> = errors => {
    console.log(errors);
  };

  return (
    <div>
      <h1 className={styles['page-title']}>Control Form Page</h1>
      <form
        action="/"
        onSubmit={handleSubmit(onSubmit, onError)}
        className={styles.container}
      >
        <FormInputControl
          title="Name"
          placeholder="Enter your name"
          type="text"
          id="username"
          register={register('username')}
        />

        <FormInputControl
          title="Age"
          placeholder="Enter your age"
          type="number"
          id="age"
          register={register('age')}
        />

        <FormInputControl
          title="Email"
          placeholder="Enter your email"
          type="email"
          id="email"
          register={register('email')}
        />

        <FormInputControl
          title="Password"
          placeholder="Enter your password"
          type="password"
          id="password"
          register={register('password')}
        />

        <FormInputControl
          title="Confirm password"
          placeholder="Confirm your password"
          type="password"
          id="confirmPassword"
          register={register('password')}
        />

        <div className={styles['radio-container']}>
          <span>Gender</span>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <>
                <FormCheckControl
                  id="male"
                  type="radio"
                  value="male"
                  checked={field.value === 'male'}
                  onChange={() => field.onChange('male')}
                  title="Male"
                />
                <FormCheckControl
                  id="female"
                  type="radio"
                  value="female"
                  checked={field.value === 'female'}
                  title="Female"
                  onChange={() => field.onChange('female')}
                />
              </>
            )}
          />
        </div>

        <div className={styles['checkbox-container']}>
          <Controller
            name="accept"
            control={control}
            render={({ field }) => (
              <FormCheckControl
                type="checkbox"
                checked={field.value}
                onChange={e => field.onChange(e.target.checked)}
                title="I accept all terms and conditions"
              />
            )}
          />
        </div>

        <Controller
          name="avatar"
          control={control}
          render={({ field }) => (
            <FormInputControl
              title="Upload avatar"
              type="file"
              id="avatar"
              onChange={e =>
                field.onChange(e.target.files ? e.target.files[0] : null)
              }
            />
          )}
        />

        <FormButton isDisabled={false} />
      </form>
    </div>
  );
};

export default ControlFormPage;
