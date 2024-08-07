import { Box, HStack, StackProps } from '@chakra-ui/react';
import React from 'react';
import MyIcon from '@fastgpt/web/components/common/Icon';
import { useTranslation } from 'next-i18next';

const VariableTip = (props: StackProps) => {
  const { t } = useTranslation();
  return (
    <HStack fontSize={'xs'} spacing={1} {...props}>
      <MyIcon name={'common/info'} w={'0.9rem'} transform={'translateY(1px)'} />
      <Box>{t('common:textarea_variable_picker_tip')}</Box>
    </HStack>
  );
};

export default VariableTip;
