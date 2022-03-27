import React, { useLayoutEffect, useState } from 'react';

import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/react/solid';

import {
  Dots,
  Nav,
  ChangePageButton,
  NextPageContainer,
  PreviousPageContainer,
  styleArrowIcon,
  stylePageCurrent,
  stylePageNumber,
} from './styles';

type TPage = { index: number; current: boolean };
interface TPaginationProps {
  numberOfPages: number;
  current: number;
  onClickPage: (pageNumber: number) => void;
}

export const Pagination: React.FC<TPaginationProps> = ({
  current,
  numberOfPages,
  onClickPage,
}) => {
  const [pages, setPages] = useState<(TPage | string)[]>();

  const dividePageNumbersWithDots = () => {
    const pagesArray: (TPage | string)[] = [];

    for (let index = 1; index <= numberOfPages; index += 1) {
      if (index === current) {
        pagesArray.push({
          index,
          current: true,
        });
      } else {
        pagesArray.push({ index, current: false });
      }
    }
    if (numberOfPages > 7 && current > 5)
      pagesArray.splice(3, current - 5, 'prev dots');
    if (numberOfPages > 7 && current < numberOfPages - 4)
      pagesArray.splice(
        current + 1 - numberOfPages,
        numberOfPages - (current + 4),
        'next dots'
      );

    setPages(pagesArray);
  };

  useLayoutEffect(() => {
    dividePageNumbersWithDots();
  }, [current, numberOfPages]);

  return (
    <Nav>
      <PreviousPageContainer>
        <ChangePageButton
          type="button"
          onClick={() => onClickPage(current - 1)}
        >
          <ArrowNarrowLeftIcon
            className={`mr-3 ${styleArrowIcon}`}
            aria-hidden="true"
          />
          Prev
        </ChangePageButton>
      </PreviousPageContainer>

      <div className="hidden md:-mt-px md:flex">
        {pages &&
          pages.map((page) => {
            if (page === 'prev dots' || page === 'next dots')
              return <Dots key={page}>...</Dots>;
            if (typeof page === 'string') return false;
            return (
              <button
                key={page?.index}
                type="button"
                onClick={() => onClickPage(page.index)}
                className={page.current ? stylePageCurrent : stylePageNumber}
              >
                {page.index}
              </button>
            );
          })}
      </div>

      <NextPageContainer>
        <ChangePageButton
          type="button"
          onClick={() => onClickPage(current + 1)}
        >
          Next
          <ArrowNarrowRightIcon
            className={`ml-3 ${styleArrowIcon}`}
            aria-hidden="true"
          />
        </ChangePageButton>
      </NextPageContainer>
    </Nav>
  );
};
