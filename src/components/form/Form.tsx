import React, { useRef, useState } from 'react';
import Cross from '../../icons/Cross';
import UploadDoc from '../../icons/UploadDoc';
import ArrowLeft from '../../icons/ArrowLeft';
import CheckMark from '../../icons/CheckMark';
import Eye from '../../icons/Eye';
import NoEye from '../../icons/NoEye';
import { InputFieldType, TextareaFieldType } from '../../types';

const Form = () => {
  const [description, setDescription] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = (visible: boolean) => setIsVisible(visible);

  const handleFileInputClick = () => fileInputRef.current?.click();

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const InputField = ({
    label,
    id,
    type,
    placeholder,
    value,
    handleChange,
  }: InputFieldType) =>
    type === 'text' ? (
      <div>
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-gray-700"
        >
          {label}
        </label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="border border-gray-200 rounded-md p-3 mt-2 w-full focus:outline-none bg-blue-100 opacity-50 placeholder-gray-700"
        />
      </div>
    ) : type === 'checkbox' ? (
      <div className="flex items-center">
        <input
          type="checkbox"
          id="isMainClub"
          value={value}
          onChange={handleChange}
          className="mr-2 h-5 w-5 border-gray-300 text-blue-500 focus:ring-0 bg-blue-100 opacity-[0.5] "
        />
        <label htmlFor={id} className="text-sm text-gray-700">
          {label}
        </label>
      </div>
    ) : null;

  const WordCount = ({ text }: { text: string }) => {
    const countWords = (text: string) =>
      text.trim().split(/\s+/).filter(Boolean).length;
    const wordCount = countWords(text);
    return (
      <p
        className={`text-xs mx-5 ${
          wordCount > 300 ? 'text-red-500' : 'text-gray-500'
        }`}
      >
        {wordCount > 300
          ? 'Максимальное количество слов превышено!'
          : `${wordCount}/300`}
      </p>
    );
  };

  const UploadFile = () => {
    return (
      <>
        <label htmlFor="fileInput" className="block text-gray-500 font-[600]">
          Логотип клуба
        </label>

        <div className="">
          <div
            className="flex gap-1 items-center justify-center py-10 px-4 rounded-md border border-dashed border-blue-600  cursor-pointer font-bold text-blue-600 text-lg"
            onClick={handleFileInputClick}
          >
            <UploadDoc />
            Загрузить файл
          </div>
          <input
            ref={fileInputRef}
            type="file"
            id="fileInput"
            className="hidden"
          />
          <p className="text-gray-400 leading-snug font-[500] text-[12px]">
            JPG, PNG, SVG <br />
            Не более 600x600px, 5MB
          </p>
        </div>
      </>
    );
  };

  return (
    <div className="my-5 mx-6 p-5 border border-gray-200 rounded-lg max-w-[700px] relative flex flex-col gap-5">
      <div className="absolute top-2 right-2 text-gray-500 cursor-pointer">
        <Cross />
      </div>
      <p className="text-[23px]">Создание клуба</p>

      <div className="flex gap-7">
        <div className="basis-[40%] flex flex-col gap-2">
          <UploadFile />
        </div>

        <div className="basis-[60%] flex flex-col gap-7">
          <div>
            <InputField
              type="text"
              label="Название клуба"
              id="clubName"
              placeholder="Введите название клуба"
            />
          </div>

          <div className="flex items-center">
            <InputField
              placeholder=""
              label="Главный клуб"
              id="isMainClub"
              type="checkbox"
            />
          </div>

          <div>
            <label
              htmlFor="clubAdmin"
              className="block text-sm font-semibold text-gray-700"
            >
              Администратор клуба
            </label>
            <select
              id="clubAdmin"
              className="border border-gray-200 rounded-md p-3 mt-2 w-full focus:outline-none bg-blue-100 opacity-[0.4]"
            >
              <option value="" disabled selected>
                Выберите главного администратора
              </option>
              <option value="admin1">Администратор 1</option>
              <option value="admin2">Администратор 2</option>
              <option value="admin3">Администратор 3</option>
            </select>
          </div>
        </div>
      </div>

      <div className="">
        <label
          htmlFor="description"
          className="block text-sm font-semibold text-gray-700"
        >
          Краткое описание
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-200 rounded-md p-3 mt-2 w-full focus:outline-none bg-blue-100 opacity-50 placeholder-gray-700 h-[100px]"
          placeholder="Текст описания"
        />
        <WordCount text={description} />
      </div>

      <div className="flex gap-5">
        <div className="basis-1/2">
          <InputField
            label="Категория"
            id="category"
            placeholder=""
            type="text"
          />
        </div>

        <div className="basis-1/2">
          <label
            htmlFor="category"
            className="block text-sm font-semibold text-gray-700"
          >
            Видимость
          </label>
          <div
            id="category"
            className="border border-blue-200 rounded-md p-1 mt-2 w-full focus:outline-none bg-blue-50 placeholder-gray-700 h-[49.5px] flex relative "
          >
            <button
              className={`rounded-lg absolute p-2 top-1 left-1 gap-1 w-[44%] h-fit flex justify-center items-center transition-all duration-500 ease-in-out ${
                isVisible
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 bg-transparent'
              }`}
              onClick={() => handleButtonClick(true)}
            >
              <Eye />
              Видимый
            </button>

            <button
              className={`absolute top-1 right-1 w-[54%] gap-1 h-fit p-2 flex justify-center items-center transition-all duration-500 ease-in-out ${
                !isVisible
                  ? 'bg-blue-500 text-white rounded-lg'
                  : 'bg-transparent text-gray-600'
              }`}
              onClick={() => handleButtonClick(false)}
            >
              <NoEye />
              Заблокирован
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-5">
        <button className="flex items-center gap-2 justify-center basis-1/2 p-3 bg-gray-500 rounded-lg text-white font-bold">
          <ArrowLeft />
          Вернуться
        </button>
        <button className="flex items-center gap-2 justify-center basis-1/2 p-3 bg-green-600 rounded-lg text-white font-bold">
          <CheckMark />
          Создать клуб
        </button>
      </div>
    </div>
  );
};

export default Form;
