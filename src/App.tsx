import { useState } from "react";
import "./App.css";
import { Providers } from "./providers";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  VStack,
  HStack,
  Flex,
  Select,
  Textarea,
  Button,
  Spinner,
  Text,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useClipboard,
} from "@chakra-ui/react";
import { ArrowForwardIcon, EditIcon, EmailIcon } from "@chakra-ui/icons";
import { MdArrowDropDown } from "react-icons/md";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

const frontendLanguages = ["angular", "vue", "react"];

function App() {
  const [value, setValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [languages, setLanguages] = useState(["react"]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    onCopy,
    value: copyValue,
    setValue: setCopyValue,
    hasCopied,
  } = useClipboard("");
  const placeholder = "text to be copied...";

  return (
    <div className="App">
      <Providers>
        <Box m={"100px 20px"}>
          <h3>useClipboard テキストをコピーする</h3>

          <>
            <Flex mb={2}>
              <Input
                placeholder={placeholder}
                value={copyValue}
                onChange={(e) => {
                  setCopyValue(e.target.value);
                }}
                mr={2}
              />
              <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
            </Flex>
            <Input></Input>
          </>
        </Box>
        <Box>
          <h3>useDisclosure モーダル</h3>
          <Button onClick={onOpen}>Open Modal</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box>この記事を削除しますか？</Box>
              </ModalBody>

              <ModalFooter>
                <Button mr={3} onClick={onClose}>
                  キャンセル
                </Button>
                <Button color={"red"}>削除する</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>

        <Box bgColor={"#f6f5f4"} margin={"auto 10px"} padding={"10px"}>
          <Box mt={"100px"} fontSize={"50px"}>
            test
          </Box>
          <Box>test</Box>
          <Box>test</Box>

          <Box
            as="div"
            margin={"0 auto"}
            width={"150px"}
            borderRadius="md"
            bg="tomato"
            color="white"
            px={4}
            height={8}
            mb={"10px"}
          >
            Button
          </Box>
          {/* // Input */}
          <Box>
            Value: {value}
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EditIcon color="red.500" />
              </InputLeftElement>
              <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                bg={"white"}
              />
            </InputGroup>
          </Box>
        </Box>
        {/* // Checkbox */}
        <VStack>
          <Checkbox size={"sm"} defaultChecked>
            Checkbox
          </Checkbox>
          <Checkbox size={"md"} defaultChecked>
            Checkbox
          </Checkbox>
          <Checkbox spacing="4rem" size={"lg"} defaultChecked>
            Checkbox
          </Checkbox>
        </VStack>

        <h3>チェックボックスグループ</h3>
        <CheckboxGroup colorScheme="green" defaultValue={languages}>
          <VStack spacing={[1, 5]} direction={["column", "row"]}>
            {frontendLanguages.map((language) => {
              return (
                <Checkbox
                  value={language}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    if (checked) {
                      setLanguages([...languages, language]);
                    } else {
                      setLanguages(languages.filter((l) => l !== language));
                    }
                  }}
                >
                  {language}
                </Checkbox>
              );
            })}
          </VStack>
        </CheckboxGroup>

        <h3>セレクト</h3>

        <Box margin={"auto 10px"}>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <Select icon={<MdArrowDropDown />} placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box margin={"10px"}>
          <h3>テキストエリア</h3>
          Value: {textareaValue}
          <Textarea
            isInvalid={textareaValue.length > 10}
            placeholder="テキストエリアに値を入力してください"
            onChange={(e) => setTextareaValue(e.target.value)}
          >
            {textareaValue}
          </Textarea>
        </Box>
        <Box margin={"10px"}>
          <h3>ボタン</h3>
          <VStack>
            <Button size={"sm"} colorScheme="blue">
              Button
            </Button>
            <Button size={"md"} colorScheme="blue">
              Button
            </Button>
            <Button size={"lg"} colorScheme="blue">
              Button
            </Button>
            <Button leftIcon={<EmailIcon />} size={"md"} colorScheme="blue">
              Button
            </Button>
            <Button
              rightIcon={<ArrowForwardIcon />}
              size={"lg"}
              colorScheme="blue"
            >
              Button
            </Button>

            <Button isLoading={true} size={"md"} colorScheme="blue">
              Button
            </Button>

            <Button
              isLoading
              colorScheme="blue"
              spinnerPlacement="end"
              loadingText="Loading"
              spinner={<Spinner />}
            >
              Click me
            </Button>
          </VStack>
        </Box>
        <Box margin={"10px"}>
          <h3>テキスト</h3>
          <VStack>Text</VStack>
          <Text mt={"100px"} color={"red"}>
            pタグになる
          </Text>
        </Box>
        <Box margin={"10px"}>
          <h3>Stack</h3>
          <Stack spacing="24px">
            <Box w="40px" h="40px" bg="yellow.200">
              1
            </Box>
            <Box w="40px" h="40px" bg="tomato">
              2
            </Box>
            <Box w="40px" h="40px" bg="pink.100">
              3
            </Box>
          </Stack>
        </Box>
        <Box margin={"10px"}>
          <h3>Center</h3>
          <Center bg="tomato" height={"200px"}>
            中央寄せになるよ〜
          </Center>
          <Center mt={"10px"} w="40px" h="40px" bg="tomato" color="white">
            <EditIcon />
          </Center>
        </Box>
        <Box margin={"10px"}>
          <h3>Spineer</h3>

          <VStack gap={"20px"}>
            <Text>ローディング中です</Text>
            <Spinner />
          </VStack>
        </Box>
      </Providers>
    </div>
  );
}

export default App;
