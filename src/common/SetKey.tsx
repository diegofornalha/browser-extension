import { CheckIcon } from '@chakra-ui/icons';
import { Button, Input, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useAppState } from '../state/store';

const SetKey = () => {
  const { openAIKey, updateSettings } = useAppState((state) => ({
    openAIKey: state.settings.openAIKey,
    updateSettings: state.settings.actions.update,
  }));

  const [candidateKey, setCandidateKey] = React.useState(openAIKey || '');

  return (
    <Stack spacing={4}>
      <Text>
        Para usar o Taxy, você precisará inserir sua chave de API OpenAI. Isso é salvo em
        Armazenamento do Chrome, não em nossos servidores. Depois de ter uma conta OpenAI, você
        pode criar uma chave{' '}
        <Link href="https://beta.openai.com/account/api-keys" color="blue.500">
          aqui
        </Link>
        .
      </Text>
      <Input
        value={candidateKey}
        placeholder="Inserir aqui sua chave API"
        type={'password'}
        onChange={(e) => setCandidateKey(e.target.value)}
      />
      <Button
        onClick={() => {
          updateSettings({ openAIKey: candidateKey });
        }}
        leftIcon={<CheckIcon />}
        colorScheme="blue"
        disabled={!candidateKey}
      >
        Salvar
      </Button>
    </Stack>
  );
};

export default SetKey;
