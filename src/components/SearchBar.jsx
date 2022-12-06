import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getWeather } from '../store';


export const SearchBar = ({isLoading}) => {

  const dispatch = useDispatch();

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    defaultValues: {
      searchTxt: '',
    }
  });
  
  const onSubmitted = (data) => {
    dispatch(getWeather(data.searchTxt));
   
    reset({
      searchTxt:''
    })
  }

  
  return (
    <div className="container">
      <div className="buscador d-flex justify-content-center mt-2 rounded">
          <form onSubmit={handleSubmit(onSubmitted)} className="m-1 d-flex">
              <input name="searchTxt" type="text" className="form form-control m-1" 
                {...register("searchTxt", {required: true, minLength: 3, maxLength: 15})} 
                />
              <button className=" btn btn-close-white" disabled={isLoading}>Enviar</button>
          </form>
      </div>
      {errors.searchTxt?.type === 'required' && <p className="texto text-muted d-flex justify-content-center">Campo obligatorio</p>}  
    </div>

  )
}
