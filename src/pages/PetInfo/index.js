import React, { useState, useRef } from 'react';
import { StatusBar } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { useNavigation, useRoute } from '@react-navigation/native';

import BackButton from '~/components/BackButton';
import { colors } from '~/styles/themes';
import { widthPercentageToDP } from '~/styles/themes/responsive';

import {
  Container,
  Scroll,
  ImagePet,
  CardInfo,
  ViewTopInfo,
  NamePet,
  IconSex,
  ViewMiddleInfo,
  BreedPet,
  YearsPet,
  ViewBottomInfo,
  IconLocation,
  DistancePet,
  CardDescription,
  ViewTopDescription,
  ViewAutor,
  Avatar,
  ViewInfo,
  Autor,
  Type,
  ViewDate,
  Date,
  ViewBottomDescription,
  Description,
  ViewFooter,
  ViewFovorite,
  IconFavorite,
  ViewAdopt,
  TitleAdopt,
} from './styles';

export default function PetInfo() {
  const [photos] = useState([
    {
      id: '1',
      url: 'https://cdn2br.mundo.com/fotos/201803/20-73-600x400.jpg',
    },
    {
      id: '2',
      url: 'https://cdn2br.mundo.com/fotos/201803/20-73-600x400.jpg',
    },
    {
      id: '3',
      url: 'https://cdn2br.mundo.com/fotos/201803/20-73-600x400.jpg',
    },
    {
      id: '1',
      url: 'https://cdn2br.mundo.com/fotos/201803/20-73-600x400.jpg',
    },
    {
      id: '2',
      url: 'https://cdn2br.mundo.com/fotos/201803/20-73-600x400.jpg',
    },
    {
      id: '3',
      url: 'https://cdn2br.mundo.com/fotos/201803/20-73-600x400.jpg',
    },
  ]);
  const [indexActive, setIndexActive] = useState(0);

  const carouselRef = useRef(null);

  const navigation = useNavigation();

  const route = useRoute();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Container>
        <Scroll>
          <BackButton press={() => navigation.goBack()} pet />
          <Carousel
            ref={carouselRef}
            data={photos}
            renderItem={({ item }) => <ImagePet source={{ uri: item.url }} />}
            onSnapToItem={index => setIndexActive(index)}
            sliderWidth={widthPercentageToDP('100%')}
            itemWidth={widthPercentageToDP('100%')}
          />
          <Pagination
            dotsLength={photos.length}
            activeDotIndex={indexActive}
            dotStyle={{
              width: 20,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: colors.primary,
            }}
            inactiveDotStyle={{
              width: 10,
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />

          <CardInfo>
            <ViewTopInfo>
              <NamePet>{route.params.data.name}</NamePet>
              <IconSex male />
            </ViewTopInfo>

            <ViewMiddleInfo>
              <BreedPet>Golden</BreedPet>
              <YearsPet>2 ano(s) de idade</YearsPet>
            </ViewMiddleInfo>

            <ViewBottomInfo>
              <IconLocation />
              <DistancePet>Distância: 3,8 km</DistancePet>
            </ViewBottomInfo>
          </CardInfo>

          <CardDescription>
            <ViewTopDescription>
              <ViewInfo>
                <Avatar
                  source={{
                    uri:
                      'https://api.adorable.io/avatars/50/abott@adorable.png',
                  }}
                />

                <ViewAutor>
                  <Autor>João Lucas</Autor>
                  <Type>Dono</Type>
                </ViewAutor>
              </ViewInfo>

              <ViewDate>
                <Date>Jan 15 2020</Date>
              </ViewDate>
            </ViewTopDescription>

            <ViewBottomDescription>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                laudantium alias quidem commodi accusantium quas? Hic, dolores
                nulla quo, similique molestias fugiat eaque consequatur
                repudiandae esse non reprehenderit soluta nostrum. reprehenderit
                soluta nostrum.
              </Description>
            </ViewBottomDescription>
          </CardDescription>
        </Scroll>

        <ViewFooter>
          <ViewFovorite>
            <IconFavorite />
          </ViewFovorite>

          <ViewAdopt>
            <TitleAdopt>Adotar</TitleAdopt>
          </ViewAdopt>
        </ViewFooter>
      </Container>
    </>
  );
}
